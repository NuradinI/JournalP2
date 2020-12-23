<template>
  <div id="body">

    <div v-for="entrie in entries" :key="entrie.userId">
      <entries-card :EntrieObject="entrie"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import EntriesCard from './entriesCard.vue'
import cookies from 'vue-cookies'
export default {
    components : {
      EntriesCard
    },
    data() {
      return {
        entries: []
      }
    },
   
    methods: {
      getEntries: function(){
        axios.request({
          url: 'http://127.0.0.1:5000/api/entries',
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            loginToken : cookies.get('session')
          },
          
        }).then((response) => {
          this.entries = response.data
          console.log(response)
        }).catch((error)=> {
          console.log(error)
        })
      }
    },
    mounted(){
      this.getEntries();
    }
};
</script>

<style scoped>
</style>
