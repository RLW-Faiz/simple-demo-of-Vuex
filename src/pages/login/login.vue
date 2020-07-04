<template>
  <div class="login">
    <input placeholder="用户账号" v-model="user_name" class="user_info" />
    <input placeholder="用户密码" v-model="user_pwd" class="user_info" />
    <button class="login_btn" @click="btn">登录</button>
  </div>
</template>
<script>
import store from '../../store'
export default {
  data() {
    return {
      user_name:'',
      user_pwd:''
    };
  },
  methods:{
    btn(){
      const that =this
      if(this.user_name && this.user_pwd)
      {
        setTimeout(()=>{
          store.commit('login', {
            user_name: that.user_name,
            user_pwd: that.user_pwd,
            user_info: 1
          },500)
          that.$router.push("./")
        })
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  padding: 40vh 30px 0 30px;
  display: flex;
  flex-direction: column;

  .user_info {
    margin-top: 30px;
    // width: 100%;
    height: 50px;
    font-size: 24px;
  }

  .login_btn{
      margin-top: 30px;
    //   width: 100%;
      height: 50px;
      font-size: 24px;
  }
}
</style>