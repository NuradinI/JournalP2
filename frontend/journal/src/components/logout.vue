<template>
    <div>
        <button @click="logOut">Logout</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        methods: {
            logOut: function(){
                axios.request({
                    url: "http://127.0.0.1:5000/api/login",
                    method: "delete",
                    headers: {
                        "Content-Type": "application/json",
                        data: {
                            loginToken : cookies.get('session')
                        }
                    }
                }).then((response)=>{
                    console.log(response)
                    this.$router.push
                    ('/')
                }).catch((error)=> {
                    consolelog(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>