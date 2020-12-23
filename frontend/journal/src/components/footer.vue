<template>
  <v-footer padless>
    <v-col id="footer"
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Nuradin</strong>
    </v-col>
  </v-footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#footer {
    padding: 30px;
    background-color: #dddddd;
    
}
</style>