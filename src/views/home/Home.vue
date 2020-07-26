<template>
  
    <div id="home">

      <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
      <TabControl :titles="['流行','新款','精选']" 
                  class="tab-control1"
                   @tabClick="tabClick"
                   ref = "tabControl1" v-show ="isTabFixed"/>

      <Scroll class="content" 
              ref="scroll" 
              :probe-type="3" 
              @scroll="contentScroll" 
              :pullUpLoad="true"
              @pullingUp = "loadMore">
              <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
              <RecommendView :recommends="recommends"/>
              <FeatureView/>
              <TabControl :titles="['流行','新款','精选']"                 
                   @tabClick="tabClick"
                   ref = "tabControl2" />
              <GoodsList :goods="showGoods"/>
      </Scroll>
     
      <BackTop @click.native="backClick" v-show="isShowBackTop"/>
  

    </div>

</template>

<script>
//子组件
import HomeSwiper from "views/home/childComps/HomeSwiper.vue"
import RecommendView from "views/home/childComps/RecommendView.vue" 
import FeatureView from "views/home/childComps/FeatureView.vue"

//公共组件
import NavBar from "@/components/common/navbar/NavBar.vue"
import TabControl from "@/components/content/tabControl/TabControl.vue"
import GoodsList from "@/components/content/goods/GoodsList.vue"
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'
//请求网络的方法
import {getHomeMultidata,getHomeGoods} from "network/home.js"
import {debounce} from "@/common/utils.js"


export default {
  name: 'Home',
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop

  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]},
      },
      currentType:"pop",
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  //用生命周期函数，当组件创建完成的时候，发送网络请求，
  //使用的具体方法是，把之前封装好的网络请求函数（api),放到created()生命周期函数中
  created(){
    //1.请求多个数据
      this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")

   
  },

  //在created钩子函数中不一定能拿到组件模板，因为没挂载?
  //应该在mounted中才能确保成功取到模板对象？
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
   
    //1.监听item中图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
      
      //this.$refs.scroll.refresh()
      //console.log("---");
      refresh() 
    })
    //2.获取tabControl的offsetTop
    //所有的组件都有一个属性$el:用于获取组件中的元素
    //this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    //console.log(this.$refs.tabControl);
    //console.log(this.$refs.tabControl.$el);
    //console.log(this.$refs.tabControl.$el.offsetTop);
    
  },
  methods:{
    //事件监听相关方法

    //监听tabcontrol的点击
    tabClick(index){
      //console.log(index);
      switch(index){
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick(){
      //.native修饰符：在我们需要监听一个组件的原生事件时，必须给对应的事件
      //加上.native修饰符，才能监听到
      console.log("native修饰符，监听的点击生效了");
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //监听首页的滚动
    contentScroll(position){
      //console.log(position);
      //实时监听y值的变化，根据y值的变化来判断返回顶部的按钮是否显示
      //1.判断backtop是否显示
      this.isShowBackTop = position.y < -1000

      //2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = position.y < -this.tabOffsetTop
      //console.log(1);
    },
    loadMore(){
      //console.log("loadmoresuccess");
      this.getHomeGoods(this.currentType)
      //每执行完成一次上拉加载更多，就调用refresh()刷新一次，重新计算一次scrollhieght,
      this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad(){
      //console.log("--swiperImageLoad--");
      //console.log(this.$refs.tabControl.$el.offsetTop);
      //console.log(this.tabOffsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      //console.log(this.tabOffsetTop);
    },
    //网络请求相关方法
    getHomeMultidata(){
        getHomeMultidata().then(res=>{
        //console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        })
    },
    getHomeGoods(type){
        const page= this.goods[type].page + 1;
        getHomeGoods(type,page).then(res=>{
          //console.log(res);
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.finishPullUp()             
        }) 
    }
  }


}
</script>

<style scoped>

#home{
  //background-color:pink;
 
  position: relative;
  left:0;
  right:0;
  top:0;
  //padding-top:44px;
  height:100vh;
 
  
}

.home-nav{
background-color:#ff8198;
color:#fff;
  /*在使用浏览器原生滚动时,为了让导航不跟随一起滚动，才用这些属性*/
  //position:fixed;
  //left:0;
  //right:0;
  //top:0;
  //z-index:9;
}

.tab-control1{
  position: relative;;
  //top:44px;
  background-color:#fff;
  z-index: 20;
}
 
.content{
  
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:98px;
  left:0;
  right:0; 
}


</style>