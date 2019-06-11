<template>
  <div class="login">
    <h1>{{ title }}</h1>
    <div>
      <input type="text" v-model="username" placeholder=" 用户名">
    </div>
    <div>
      <input type="password" v-model="password" placeholder=" 密码">
    </div>
    <div>
      <button @click="login">点击登录</button>
    </div>
    <div>
      <router-link to="/Register">
        <p>点击注册</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      title: 'Login',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      var user = { name: this.username, pwd: this.password }
      axios.post('/api/login', user)
        .then(response => {
          alert(response.data === true ? '登录成功！' : '登录失败！')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  background-color: beige;
}

input {
  width: 200px;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  width: 200px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

p {
  width: 50px;
  font-size: 10px;
  color: gray;
  margin-left: auto;
  margin-right: auto;
  text-decoration-line: underline;
  cursor: pointer;
}
</style>
