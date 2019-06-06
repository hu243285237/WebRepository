<template>
  <div class="register">
    <h1>{{ title }}</h1>
    <div>
      <input type="text" v-model="username" placeholder=" 用户名">
    </div>
    <div>
      <input type="password" v-model="password" placeholder=" 密码">
    </div>
    <div>
      <button @click="register">点击注册</button>
    </div>
    <div>
      <router-link to="/">
        <p>返回登录</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      title: 'Register',
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      var user = { name: this.username, pwd: this.password }
      axios.post('/api/register', user)
        .then(response => {
          alert(response.data === true ? '注册成功！' : '注册失败！')
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
.register {
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
