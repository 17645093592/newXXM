<template>
  <div class="login">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formdata"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click="Login" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from '../../api/login'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      formdata: {
        username: 'admin',
        password: '123456',
      },
    }
  },
  methods: {
    ...mapActions(['setLoginData']),
    async Login(){
      let res = await login(this.formdata)
      if(res.meta.status == 200){
        this.setLoginData(res.data)
        this.utils.goIndex()
      }
    } 
  },
}
</script>

<style lang="css" scoped>
.login {
  background: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login .login-form {
  background: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login .login-btn {
  width: 100%;
}
</style>