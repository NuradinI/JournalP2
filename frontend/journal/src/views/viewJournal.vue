<template>
  <div>
    <div id="entrie" dark>
      <v-card>
        <v-card-title class="card">{{ EntrieObject.title }}</v-card-title>
        <v-card-subtitle>{{ EntrieObject.createdAt }}</v-card-subtitle>
        <v-card-text>{{EntrieObject.content}}</v-card-text>
        <div>
          <delete-entrie />
        </div>
      </v-card>
      <div>
          <v-btn @click="goBack">Back</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteEntrie from "../components/deleteEntries.vue";
import axios from "axios";
import cookies from "vue-cookies";
export default {
  components: {
    DeleteEntrie
  },
  data() {
    return {
      postId: this.$route.query.id,
      EntrieObject: {
        title: "",
        createdAt: "",
        content: ""
      }
    };
  },
  methods: {
    getEntries: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/entries",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            loginToken: cookies.get("session")
          },
          params: {
            postId: this.postId
          }
        })
        .then(response => {
          this.EntrieObject = response.data[0];
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    goBack: function(){
        this.$router.push('/feed')
    }
  },
  mounted() {
    this.getEntries();
    console.log(this.$route);
  }
};
</script>

<style scoped>
#entrie {
  text-align: center;
}
</style>