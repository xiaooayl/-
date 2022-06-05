<template>
  <topNav></topNav>
  <div class="Mine-swiper">
<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
  </div>
  <div class="zhong">
    <img src="@/assets/home/zhong.png">
  </div>

  <rimen></rimen>
</template>

<script>
import { Button } from "vant";
import { Swipe, SwipeItem } from "vant";
import topNav from "@/components/topNav.vue";
import rimen from "@/components/rimen.vue"
export default {
  components: {
      topNav,
      rimen,
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
    setup() {
    const images = [
    require('@/assets/home/one.png'),
    require('@/assets/home/two.png'),
     require('@/assets/home/three.png'),
      require('@/assets/home/four.png'),
       require('@/assets/home/five.png'),
    ];
    return { images };
  },
};
</script>
<style lang="scss" scoped>


 
  .Mine-swiper img{
    display: inline-block;
    width:350px;
    height:160px;
    padding-top:10px;
    border-radius:5%;

  }
  .zhong img{
    width:350px;
     height:90px;
     padding-top:5px
  }

    
    

</style>
