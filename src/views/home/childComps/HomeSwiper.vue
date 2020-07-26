<template>
  
    <swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="" @load ="imageLoad">
          </a>
        </swiper-item>
    </swiper>


</template>

<script>

import{Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  name: 'HomeSwiper',
  props:{
      banners:{
          type:Array,
          default(){
              return[]
          }
      }
  },
  data(){
    return{   
      isLoad:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      //console.log("imgloadswiper");
      if(!this.isLoad){
          this.$emit("swiperImageLoad")
          //通过更改isLoad的属性，下次轮播图再加载，就不会再发送加载事件了
          this.isLoad=true
      }
      
    }
  }
}
</script>

<style>


</style>