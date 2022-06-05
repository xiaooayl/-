<template>
    <div class="all">
        <div class="chuang">
            <img :src=" require('@/assets/about/chuang.png')"/>
        </div>
        <div class="liu">
            <img :src=" require('@/assets/about/liu.png')"/>
        </div>
        <div class="ding">
            <img :src=" require('@/assets/about/ding.png')"/>
        </div>
    <div class="xiao">
        <img :src=" require('@/assets/about/xiao.png')"/>
    </div >
    </div>
</template>


<style lang="scss" scoped>
.all{
    display: flex;
    justify-content: space-around;
    .chuang{
        margin-top:11px;
    }
    .liu{
        margin-top:14.7px;
    }
    .ding{
        margin-top:16px;
    }
    .xiao{
        margin-top:16.8px;
    }
}
</style>