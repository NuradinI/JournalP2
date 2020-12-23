<template>
  <div id="form">
    <h1 id="signup">Sign Up!</h1>
    <router-link id="login" to="/">Login </router-link>
    <v-text-field label="Email" type="email" id="email" v-model="email" solo />
    <v-text-field label="Name" type="text" id="name" v-model="name" solo />
    <v-text-field label="Password" type="password" id="password" v-model="password" solo />
    <v-text-field label="Date" type="text" id="date" v-model="accountcreatedat" solo />
    <v-text-field label="Goals" type="text" id="goals" v-model="goals" solo />
    <br>
    <v-btn id="btn" @click="createUser">Sign In!</v-btn>
    <h3>{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    data() {
        return {
            email: '',
            name: '',
            password: '',
            accountcreatedat: '',
            goals: '',
            loginStatus: ''
        }
    },
    methods: {
        createUser: function(){
            axios.request({
                url: "http://127.0.0.1:5000/api/users",
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                data: {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    accountcreatedat: this.accountcreatedat,
                    goals: this.goals
                }
            }).then((response)=>{
                this.$router.push('/feed')
                cookies.set('session', response.data.loginToken)
                console.log(response)
                this.loginStatus = 'Signed In!'
            }).catch((error)=>{
                console.log(error)
                this.loginStatus = 'Check Inputs'
            })
        }
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');
#form {
    text-align: center;
}
#btn {
    background-color: #0095f6;
}
#login {
   color: #0095f6;
}
#signup {
    font-family: "Lobster Two", cursive;
    font-size: 2.5em;
}
</style>