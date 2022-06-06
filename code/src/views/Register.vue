
<template>
  <div class="all">
    <div class="login-bg">
      <div class="login-contain">
        <div class="login-header">
          <p>欢迎注册</p>
        </div>
        <div class="form-group">
          <div class="form-item">
            <label for="username">
              <img src="../assets/login/user.png" />
            </label>
            <input
              v-model="phone"
              id="username"
              type="text"
              placeholder="请输入账号"
            />
          </div>
          <div class="form-item">
            <label for="password">
              <img src="../assets/login/password.png" alt="" />
            </label>
            <input
              v-model="password"
              id="password"
              type="password"
              placeholder="请输入密码"
            />
          </div>
          <div class="form-item">
            <label for="password2">
              <img src="../assets/login/password.png" alt="" />
            </label>
            <input
              v-model="password2"
              id="password2"
              type="password2"
              placeholder="请再次输入密码"
            />
          </div>
        </div>
        <div class="button-group" >
           
             
          <button @click="loginEvent" class="login-btn" id="doLogin">
             
            注册
          </button>

          <!-- <button @click="$router.push('/about')" class="login-btn" id="doLogin">登录</button> -->
        </div>

        <div class="order-login">
          <div class="order-login-box" @click="$router.push('/login')">
            返回登录
          </div>  
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import { getRegister } from "@/api/index.js";
export default {

  data: function() {
    return {
      phone: "",
      password: "",
      password2: ""
    };
  },
  methods: {
 
    loginEvent: async function() {

      let result = await getRegister(this.phone, this.password, this.password2);

      if (result.data.code == 200) {
    //     //  this.$store.commit('setUserId',result.data.data[0].id);
    //     //  console.log(result.data.data[0].id)
     
     
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.all {
  width: 100%;

  a,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .login-bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: orangered;
    z-index: 10000;
    color: #ffffff;
    background-size: 100% 100%;
  }
  .login-contain {
    width: 100%;
    margin: 0;
  }
  .login-header {
    padding: 5%;
  }
  .login-header p {
    font-size: 32px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 0.1em 0.15em 0.1em #74c3ca;
  }
  .login-logo {
    padding: 5%;
  }
  .login-logo img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  .login-logo p {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 2%;
  }
  .form-group {
    padding: 5%;
  }
  .form-group .form-item {
    margin-top: 5%;
    padding: 0 10px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .form-group .form-item input {
    outline: none;
    border: 0;
    background-color: transparent;
    color: #ffffff;
    height: 40px;
    font-size: 18px;
    width: 55%;
    margin-left: 12%;
  }
  .form-group .form-item input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ffffff;
    font-size: 16px;
  }
  .form-group .form-item input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ffffff;
    font-size: 16px;
  }
  .form-group .form-item input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ffffff;
    font-size: 16px;
  }
  .form-group .form-item input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ffffff;
    font-size: 16px;
  }
  .form-group .form-item label img {
    width: 25px;
    position: absolute;
    margin-top: 5px;
  }
  .form-group .form-item button {
    outline: none;
    background: transparent;
    border: 1px #00cc99 dashed;
    color: #ffffff;
    height: 30px;
    border-radius: 5px;
    float: right;
    padding: 1%;
  }
  .button-group {
    padding: 5%;
  }
  .button-group button {
    outline: none;
    border: 0;
    width: 90%;
    height: 35px;
    margin-top: 4%;
    border-radius: 20px;
    margin-left: 4%;
    color: #ffffff;
    font-size: 18px;
  }
  .button-group .login-btn {
    background-color: #ffffff;
    color: #74c3ca;
  }

  .order-login {
    padding: 5%;
  }
  .order-login-line {
    display: block;
    position: relative;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
  }
  .order-login-line:before,
  .order-login-line:after {
    content: "";
    position: absolute;
    top: 50%;
    background: #ffffff;
    width: 20%;
    height: 1px;
  }
  .order-login-line:before {
    left: 10%;
  }
  .order-login-line:after {
    right: 10%;
  }
  .order-login-box {
    font-size: 20px;
    color: #74c3ca;
    width: 110px;
    text-align: center;
    margin-left: 120px;
    background-color: #ffffff;
    border-radius: 30%;
  }
}
</style>
