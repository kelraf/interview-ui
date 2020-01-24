<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <form>
            <h1>Login</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="button" @click="login" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
    
</template>

<script>

import JQuery from 'jquery'
let $ = JQuery

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      let data_to_send = {
        user: {
          email: this.email,
          password: this.password
        }
      }

        // let self = this
        $.ajax({
            url: `http://0.0.0.0:4000/api/users/login`,
            type: 'POST',
            data: data_to_send,
            success: function(data) {
                self.$cookies.set('token', data.token)
                console.log(data.token)
                // self.$router.push("dashboard")
            },
            error: function(error) {
                console.log(error)
            }
        })


  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


// let token = this.$cookies.get("token")
//             let decoded_token = this.$jwt.decode(token)

//             if(decoded_token.sub) {
//                 let self = this
//                 $.ajax({
//                     url: `http://0.0.0.0:4000/api/apartments/user/${decoded_token.sub}`,
//                     type: 'GET',
//                     beforeSend: function(request) {
//                         request.setRequestHeader('Authorization', `Bearer ${token}`)
//                     },
//                     success: function(data) {
//                         self.apartments_data = data
//                         // console.log(data)
//                     },
//                     error: function(error) {
//                         console.log(error)
//                     }
//                 })
//             } else {
//                 console.log("Invalid Auth Token")
//             }
