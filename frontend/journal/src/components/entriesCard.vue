<template>
  <div id="body">
    <div id="entrie" dark>
      
      <v-card id="card">
        <v-card-title>{{ EntrieObject.title }}</v-card-title>
        <v-card-subtitle>{{ EntrieObject.createdAt }}</v-card-subtitle>
        <v-card-actions> <v-btn @click="goToJournal">View Journal</v-btn> </v-card-actions>
      </v-card>
      
    </div>
  </div>
</template>

<script>

export default {
  
  props: {
    EntrieObject: {
      type: Object
    }
  },
  methods: {
      goToJournal : function(){
          this.$router.push({name: 'views-entries', query: { id: this.EntrieObject.id }})
      }
  }
};
</script>

<style scoped>
#card {
  background-color: #bedcfa;
  margin-top: 5vh;
}
</style>