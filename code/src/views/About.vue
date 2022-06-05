<template>
  <div class="top">
    <div class="top_1">
      <svg class="icon_sao" aria-hidden="true">
        <use xlink:href="#icon-scan"></use>
      </svg>

      <svg class="icon_she" aria-hidden="true">
        <use xlink:href="#icon-shezhi"></use>
      </svg>
    </div>
    <div class="top_2">
      <div class="touxiang">
        <img :src="user.user_img" />
      </div>
      <div class="middle">
        <div class="name">
          {{ user.username }}
        </div>
        <div class="biao">
          6关注 0粉丝
        </div>
      </div>
      <div class="last" @click="$router.push('/login')">
      <img :src="require('@/assets/about/qiehuan.png')">
      </div>
    </div>
  </div>
  <aboutZ></aboutZ>
  <van-divider :style="{ borderColor: '#a5a5a5', margin: '0px' }">
  </van-divider>
</template>
<script>
import aboutZ from "@/components/aboutZ.vue";
import { getUser } from "@/api/index.js";
import store from "@/store";
import { Divider } from "vant";
import { reactive, toRefs, onMounted } from "vue";
export default {
  components: {
    aboutZ,
    [Divider.name]: Divider,
  },
  setup() {
    const state = reactive({
      user: [],
    });

    onMounted(async () => {
      let id = store.state.userId;
      console.log(id);
      let result = await getUser("1");
      console.log(result);
      state.user = result.data.data[0];
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 120px;
  background-color: #ffc5a8;
  .top_1 {
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
    height: 0.8rem;

    .icon_sao {
      margin-right: 15px;
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 300px;
      margin-top: 8px;
    }
    .icon_she {
      margin-right: 12px;
      width: 0.5rem;
      height: 0.5rem;
      margin-top: 8px;
    }
  }
  .top_2 {
    display: flex;
    justify-content: space-between;
    .touxiang img {
      border-radius: 100%;
      overflow: hidden;
      width: 70px;
      height: 70px;
      margin-left: 15px;
    }
    .middle {
      margin-top: 5px;
      .name {
        font-size: 22px;
        margin-right: 90px;
        color: black;
      }
      .biao {
        margin-top: 12px;
        margin-right: 90px;
        font-size: 12px;
        color: #ff8000;
      }
   
    }
       .last img{
         
        margin-right: 25px;
        margin-top:20px;
        width:1.5rem;
        height:0.7rem;
        border-radius: 20%;
      }
  }
}
</style>
