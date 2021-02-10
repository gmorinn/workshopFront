<template>
  <div id="app">
    <HeaderBar />
    <LoginPage v-on:clickLogin = "click"/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import LoginPage from './views/LoginPage.vue'


export default {
  components: {
    HeaderBar,
    LoginPage,
  },
    data() {
    return {
      is_logged: false,
      username: ""
    }
  },
  methods: {
        click() {
          is_logged = !is_logged
          console.log(is_logged)
        }
    },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
