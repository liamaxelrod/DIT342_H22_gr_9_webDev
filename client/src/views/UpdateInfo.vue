<template>
  <div id="backchangewhite">
    <div>
      <div><h1>Update Profile</h1></div>
      <div>
        <p2 style="color: red; font-size: max(2vw, 12px)">
          You will have to login again once you change your information!</p2
        >
      </div>
      <div>
        <div>
          <label for="newName">New name: </label>
          <input
            id="newInfo"
            class="newName"
            type="text"
            v-model="user.name"
            placeholder="enter your new name"
          />
        </div>
        <div>
          <label for="newEmail">New Email: </label>
          <input
            id="newInfo"
            class="newEmail"
            type="text"
            v-model="user.email"
            placeholder="enter your new email"
          />
        </div>
        <div>
          <label for="newPassord">New password:</label>
          <input
            id="newInfo"
            type="text"
            class="newPassword"
            v-model="user.password"
            placeholder="enter your new password"
          />
        </div>
      </div>
      <div>
        <b-button class="btnUser" id="infoUpdateBtn" @click="updateAll()"
          >Update</b-button
        >
        <b-button
          class="btnUser"
          id="infoCancelBtn"
          onClick="location.href='/profile'"
          >Cancel</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Api } from '../Api'

export default {
  name: 'UpdateInfo',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  },
  methods: {
    updateAll() {
      if (this.user.name !== '') {
        if (this.user.email !== '') {
          if (this.user.password !== '') {
            Api.put('/users/' + this.currentUser._id, {
              name: this.user.name,
              email: this.user.email,
              password: this.user.password
            })
            Api.get('/users/' + this.currentUser._id).then((res) => {
              console.log(res)
              localStorage.setItem('currentUser', JSON.stringify(res.data.user))
            })
            localStorage.removeItem('currentUser')
            this.$router.push('/')
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.image {
  width: 10vw;
  border-radius: 50%;
  margin: 10px;
  border: 1px solid black;
}
h1 {
  font-size: 4vw;
  color: black;
}
p {
  color: black;
  font-size: 2vw;
  margin: 2vw 2vw;
}
</style>
