<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <form>
          <h1>Register</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="button" @click="register" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
    
</template>

<script>

import axios from "axios"
// import JQuery from 'jquery'
// let $ = JQuery

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    register() {

      let data_to_send = {
        user: {
          email: this.email,
          password: this.password
        }
      }

      axios.post("http://0.0.0.0:4000/api/users", data_to_send)
      .then((resp) => {
        if (resp["status"] == 201) {
          this.$emit("login")
        }
      })
      .catch(err => console.log(err))
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
