<template>
<div class="tou">
  <div class="text">热门精选</div>
  <div class="jiantou">
<img :src=" require('@/assets/home/jiantou.png')" />
  </div>
  </div>
  <div class="mlist">
    <div class="swiper-container" id="musicSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in ceshi" :key="i">
          <img :src="item.img" />
          <div class="name">{{ item.name }}</div>
          <div class="amount">{{item.amount}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { getBanner } from "@/api/index.js";
import { reactive, toRefs, onMounted, onUpdated } from "vue";
// export default{
//     data:function(){
//         return{
//             ceshi:["天王"]
//         }
//     },
//       async mounted() {
//          let res=await getBanner()
//          console.log(res)
//     this.ceshi=res.data.data}
// }
export default {
  setup() {
    const state = reactive({
      ceshi:[],
    });
    onMounted(async () => {
      let result = await getBanner();
      state.ceshi = result.data.data;
    });
    onUpdated(() => {
      var swiper = new Swiper("#musicSwiper", {        // eslint-disable-line no-unused-vars

        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.tou{ 
display:flex;
justify-content: space-between;
.text {
  margin-left:12px;
  font-size: 22px;
  font-weight:900;
}
.jiantou{
    margin-right: 15px;
    margin-top:5px;
}
}
.mlist {
    margin-top:10px;
    margin-left:12px;
  .swiper-container {
    width: 100%;
    height: 3rem;
    .swiper-slide {
      // background-color: orange;
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        width: 100%;
        height: auto;
        border-radius: 0.1rem;
      }
      .name {
        height: 0.3rem;
        width: 100%;
        font-size: 0.24rem;
        font-weight: 700;
        line-height: 0.4rem;
        text-align: left;
       white-space:nowrap;
       overflow:hidden;
       text-overflow:ellipsis;
      }
      .amount{
          margin-top:5px;
        height: 0.3rem;
        width: 100%;
        font-size: 0.35rem;
        font-weight: 700;
        line-height: 0.4rem;
        text-align: left;
        color: red;
      }
      }
    }
  }

</style>
