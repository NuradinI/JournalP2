<template>
  <div>
    <v-btn id="btn" @click="goToPage" class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage: function() {
      this.$router.push("/PostEntrie");
    }
  }
};
</script>

<style scoped>
#btn {
  background-color: #7f78d2;
}
</style>