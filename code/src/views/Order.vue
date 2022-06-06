<template>
<div class="all">
    <!-- <div class="touxiang">
        <img :src="user.user_img" />
      </div> -->
      <div class="yi">
             <svg class="icon" aria-hidden="true" @click="$router.push('/about')">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
    <h1>订单列表</h1>
      </div>


    <div class="order" v-for="(item, i) in ceshi" :key="i">
    <div class="top">
      <div class="top1">
        英雄联盟
      </div>
      <div class="top2">
        已完成
      </div>
    </div>
    <div class="content">
      <div class="img">
        <img :src="item.img">
      </div>
      <div class="zhong">
        <div class="name">
          {{item.name}}
        </div>
        <div class="price">
          {{item.amount}}
        </div>
      </div>
    </div>
    <div class="last">
      <div class="gou">
        再次购买
      </div>
      <div class="biao">
      表个态
      </div>
    </div>
    </div>
    </div>

</template>
<script>

// import store from "@/store";
import { reactive, toRefs, onMounted} from "vue";
// import { getBanner } from "@/api/index.js";
import store from "@/store";
import { getOrder } from "@/api/index.js"
export default ({
    //  components: {
    // [Divider.name]:Divider

    //  },
     setup() {
    const state = reactive({
      ceshi:[],
    });
    onMounted(async () => {
      let id = store.state.userId;
      let result = await getOrder(id);
      state.ceshi = result.data.data;
    });
    return {
      ...toRefs(state),
    };
    },
})
</script>

<style lang="scss" scoped>
.all{
     position: fixed;
    width:100%;
    height:100vh;
    left:0;
    top:0;
    background:white;
    z-index:10000;
  
    background-size: 100% 100%;
 
    .yi{
      display:flex;
      height:50px;
       border-bottom:8px solid #dedede;
        h1{
          margin-top:6x;
        color:black;
        font-size:25px;
        margin-left:110px;
    }
   .icon{
        width: 0.7rem;
        height:0.7rem;
    }
    }
    .order{
      border-bottom:8px solid #dedede;
      .top{
             display:flex;
      justify-content: space-between;
      .top1{
        margin-left:5px;
        font-weight:550;
      }
      .top2{
        margin-right:5px;
         font-weight:300
      }
      }
      .content{
         display:flex;

      background-color:#f4f4f4;
      background-size: 100% 100%;
      .img img{
        width:100px;
        margin-left:5px;
        border-radius: 10%;;

      }
      .zhong{
        margin-left: 10px;
        .name{
            text-align: left;
            font-weight: 550;
        }
        .price{
          margin-top:30px;
          margin-right:130px;
          color: red;
             font-size: 0.35rem;
        font-weight: 700;
        }

      }
      
      }
      .last{
        display: flex;
        margin-top:5px;
        margin-bottom: 5px;
        .gou{
          position:relative;
         left:240px;
         width:60px;
         background-color: #dedede;
         border-radius: 25%;
        }
        .biao{
       position:relative;
         left:250px;
         width:60px;
           border-radius: 25%;
         background-color: orange;
        }
      }
     
    }
  
}
</style>