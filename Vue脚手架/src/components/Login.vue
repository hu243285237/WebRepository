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
      alert('username: ' + this.username + '\n' + 'password: ' + this.password)
      axios.get('/api/myGet')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login
{
  background-color: beige;
}

input
{
  width: 200px;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button
{
  width: 200px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
