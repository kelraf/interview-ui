<template>
  <div id="app">
    <div v-if="show_index_btn" class="index-btns">
      <button @click="show_register_form">REGISTER</button>
      <button @click="show_login_form">LOGIN</button>
      <button @click="show_protected">Show Protected Area</button>
    </div>

    <Register v-on:login="show_login_f" v-if="show_register" />

    <Login v-if="show_login" />

    <Home v-if="show_protected_area" />

  </div>
</template>

<script>
import JQuery from 'jquery'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

let $ = JQuery

export default {
  name: 'app',
  data() {
    return {
      show_index_btn : true,
      show_register: false,
      show_login: false,
      show_protected_area: false,
      users: []
    }
  },
  methods: {
    show_register_form() {
      this.show_register = true;
      this.show_index_btn = false;

    },
    show_login_f() {
      this.show_login = true
      this.show_register = false
    },
    show_login_form() {
      this.show_index_btn = false
      this.show_login = true
      this.show_register = false
    },
    show_protected() {
        let token = this.$cookies.get("token")
        let decoded_token = this.$jwt.decode(token)

        if(decoded_token.sub) {
            let self = this
            $.ajax({
                url: `http://0.0.0.0:4000/api/users/`,
                type: 'GET',
                beforeSend: function(request) {
                    request.setRequestHeader('Authorization', `Bearer ${token}`)
                },
                success: function(data) {
                    self.users = data
                    
                    self.show_index_btn = false,
                    self.show_register = false,
                    self.show_login = false,
                    self.show_protected_area = true

                },
                error: function(error) {
                    alert(error.statusText)
                }
            })
        } else {
            alert("Invalid Auth Token")
        }

    }
}
  ,
  components: {
    Register,
    Login,
    Home
  }
}
</script>

<style>

  #app {
    background: red;
    width: 70%;
    height: 400px;
    margin: auto;
    margin-top: 100px;
  }

</style>
