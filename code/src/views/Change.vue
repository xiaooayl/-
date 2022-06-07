<template>
<div class="all">
    <van-button type="primary" @click="$router.push('/about')">返回</van-button>
    
     <input type='file' id='file' @change="iimg($event)" class="gg">

</div>
</template>
<script>
import axios from 'axios';
import { Button } from 'vant';
export default {
    components: {

    [Button.name]: Button},
setup() {
  const iimg = async(event)=>{
      //  var file = event.target.files; 
      let baseUrl="/api";
      var formDate = new FormData();
      formDate.append("file",event.target.files[0])
      const {data: res} = await axios.post(`${baseUrl}/api/file`,formDate,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
      })
      console.log(res)
    
    }
  
    return {
      iimg
    };
}
}
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
 

}
</style>