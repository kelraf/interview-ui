<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Protected dashboard</h1>
      </div>
    </div>
  </div>
    
</template>

<script>

// import axios from "axios"
import JQuery from 'jquery'
let $ = JQuery

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    getdata() {
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
                    console.log(data)
                },
                error: function(error) {
                    console.log(error)
                }
            })
        } else {
            console.log("Invalid Auth Token")
        }

    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
