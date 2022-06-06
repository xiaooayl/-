<template>
    <div class="dao" @click="$router.push('/order')">
        <img :src="require('@/assets/about/dao.png')"/>
    </div>
    <div class="quan">
        <img :src="require('@/assets/about/quan.png')">
        </div>
</template>
<style lang="scss" scoped>
.dao img{
    width:99%;
    margin-top:15px;
    margin-right:3px;
}
.quan img{
    width:100%;

}
</style>