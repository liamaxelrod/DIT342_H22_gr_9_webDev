import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/UserProfile.vue'
import UpdateInfo from './views/UpdateInfo.vue'
import SchedulingSubmit from './views/SchedulingSubmit.vue'
import Register from './views/Register.vue'
import ForgotPassword from './views/ForgotPassword.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/update',
      name: 'updateInfo',
      component: UpdateInfo
    },
    {
      path: '/schedulingSubmit/:userId/schedules/:scheduleName', // might be deleted later
      name: 'schedulingSubmit',
      component: SchedulingSubmit
    },
    {
      path: '/schedulingSubmit',
      name: 'schedulingSubmit',
      component: SchedulingSubmit
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgotpassword',
      name: 'forgotPassword',
      component: ForgotPassword
    }
  ]
})
