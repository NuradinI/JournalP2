<template>
    <div>
        <post-entrie/><v-btn @click="goBack">Back</v-btn>
    </div>
</template>

<script>
import PostEntrie from '../components/postEntries.vue'
    export default {
        components: {
            PostEntrie
        },
        methods : {
            goBack: function(){
                this.$router.push('/feed')
            }
        }
    }
</script>

<style scoped>

</style>