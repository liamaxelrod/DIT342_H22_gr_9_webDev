<template>
  <div class="center">
    <h1 style="color:aliceblue;">New Account Registration</h1>
    <br>
    <div class="form-username">
      <h3 style="color:aliceblue">Username</h3><br />
      <input id="username" type="USER" class="form-control" v-model="user.username" placeholder="Enter Username" required /><br />
    </div>
    <br>
    <div class="form-password">
      <h3 style="color:aliceblue">Password</h3><br />
      <input id="password" type="password" class="form-control" v-model="user.password" placeholder="Enter Password" required /><br />
    </div>
    <div>
      <h3 style="color:aliceblue">Name</h3><br />
      <input id="name" type="namae" class="form-control" v-model="user.name" placeholder="Enter name" required /><br />
    </div>
    <div>
      <h3 style="color:aliceblue">Email</h3><br />
      <input id="email" type="txt" class="form-control" v-model="user.email" placeholder="Enter email" required /><br />
    </div>
    <div id="buttonbox">
      <button @click="registerUser()" class="registerbtn">Create Account</button>
    </div>
  </div>
</template>
<script>
import { Api } from '../Api'
export default {
  name: 'Register',
  data() {
    return {
      user: {
        username: '',
        password: '',
        name: '',
        email: ''
      }
    }
  },
  methods: {
    registerUser() {
      console.log(this.user.username)
      Api.post('/users', this.user).then(console.log).then(resCell => {
        this.$router.push('/')
      })
    }
  }
}
</script>
<style>
input[type='USER'],
input[type='namae'],
input[type='txt'],
input[type='password'] {
  width: 60%;
  min-width: 162px;
  margin: 5px 0 10px 0;
  display: inline-block;
  border: none;
}

input[type='USER']:focus,
input[type='namae'],
input[type='txt'],
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}

input[type='USER']:focus,
input[type='namae'],
input[type='txt'],
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}

input[type='USER']:focus,
input[type='namae'],
input[type='txt'],
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}
</style>
