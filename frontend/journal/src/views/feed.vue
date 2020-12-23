<template>
  <div>
      
    <page-header />
    <get-entries />
    <button-to-post />
    <footer-page/>
  </div>
</template>

<script>
import FooterPage from '../components/footer.vue'
import ButtonToPost from "../components/buttonToPost.vue";
import PageHeader from "../components/header.vue";
import GetEntries from "../components/getEntries.vue";

export default {
  components: {
    GetEntries,
    ButtonToPost,
    PageHeader,
    FooterPage
  }
};
</script>

<style scoped>
</style>