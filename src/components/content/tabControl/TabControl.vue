<template>

    <div class="tab-control">
        <div v-for="(item,index) in titles"
             class="tab-control-item"
             :class="{active:currentIndex===index}" @click="itemClick(index)" >
            <span>{{item}}</span>
        </div>
    </div>

</template>



<script>
export default {
    name:"Tabcontrol",
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit("tabClick",index)
        }
    }
}
</script>

<style scoped>

.tab-control{
    display:flex;
    font-size:14px;
    height:40px;
    line-height:40px;
}

.tab-control-item{
    flex:1;
}

.tab-control-item span{
  padding:5px;
}

.active{
    color:pink;
}  

.active span {
    border-bottom:3px solid; 
}

</style>































