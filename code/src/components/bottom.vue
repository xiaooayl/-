<template>
    <van-tabbar route v-model="active">
  <van-tabbar-item replact to="/">
    <span>首页</span>
    <template #icon="shouye">
      <img :src="shouye.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
   <van-tabbar-item >
    <span>聚豆</span>
    <template #icon="judou">
      <img :src="judou.active ? icon2.active : icon2.inactive" />
    </template>
  </van-tabbar-item >
   <van-tabbar-item badge="4">
    <span>发现</span>
    <template #icon="faxian">
      <img :src="faxian.active ? icon3.active : icon3.inactive" />
    </template>
  </van-tabbar-item>
   <van-tabbar-item replact to="/about">
    <span>我的</span>
    <template  #icon="wode">
      <img :src="wode.active ? icon4.active : icon4.inactive" />
    </template>
  </van-tabbar-item>
</van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';
export default {
 components:{
     [Tabbar.name]: Tabbar,
     [TabbarItem.name]:TabbarItem
 },
 setup() {
    const active = ref(0);
    const icon = {
      active:  require('@/assets/bottom/shouye.png'),
      inactive:
        require('@/assets/bottom/shouye2.png'),
    };
      const icon2 = {
      active:  require('@/assets/bottom/judou.png'),
      inactive:
        require('@/assets/bottom/judou2.png'),
    };
    const icon3 = {
      active:  require('@/assets/bottom/faxian.png'),
      inactive:
        require('@/assets/bottom/faxian2.png'),
    };
    const icon4 = {
      active:  require('@/assets/bottom/wode.png'),
      inactive:
        require('@/assets/bottom/wode2.png'),
    };
    return {
      icon,
      active,
      icon2,
      icon3,
      icon4
    };
  },
}
</script>
