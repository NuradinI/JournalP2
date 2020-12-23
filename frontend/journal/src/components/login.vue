<template>
  <div id="form">
    <h1 id="journal">Journal</h1>
    <v-text-field label="Email" type="text" id="email" v-model="email" solo />
    <v-text-field label="Password" type="password" id="password" v-model="password" solo />
    <br />
    <v-btn id="btn" @click="loginUser">Login</v-btn>
    <p>OR</p>
    <p>
      Don't have an account?
      <router-link id="signup" to="/signup">Sign Up</router-link>
    </p>
    <h3>{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading...";
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/login",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          cookies.set("session", response.data.loginToken);
          this.$router.push("/feed");
          this.loginStatus = "Logged In!";
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Check Your User Inputs";
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');
#form {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin-top: 5vh;
  text-align: center;
}
#btn {
    background-color: #0095f6;
}
#journal {
    font-family: "Lobster Two", cursive;
    font-size: 2.5em;
}
#signup {
    color: #0095f6;
}
</style>
