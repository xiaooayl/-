<template>
     <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-scan"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn">精选</span>
      <span class="navBtn active">英雄联盟</span>
      <span class="navBtn">王者荣耀</span>
      <span class="navBtn">和平精英</span>
      </div>
      <div class="topRight" >
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-jiahao1"></use>
        </svg>
      </div>
      <!--.topLeft+.topCenter+.topRight-->
    </div>
</template>
<style lang="scss" scoped>
.topNav{
    width:7rem;
    height:0.8rem;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0 0.2rem;
    .icon{
        width: 0.5rem;
        height:0.5rem;
    }
    .search{
          width:0.45rem;
          height:0.45rem;
    }
    .topCenter{
        width:5rem;
        height:0.5rem;
        display:flex;
        justify-content:space-around;
        .active{
            font-weight: 900;
             border-bottom: 2px solid yellow;
      padding-bottom: 10px;
        }
    }
}
</style>