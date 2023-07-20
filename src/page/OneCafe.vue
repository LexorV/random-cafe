<template>
    <div class="card">
        <CafeCard v-if="$store.state.oneCafe" :cafe="$store.state.oneCafe"/> 
    </div>
</template>

<script>
import CafeCard from "@/components/CafeCard.vue" 
export default {
    components: {
    CafeCard
  },
 mounted () {
    console.log(process.env.VUE_APP_BACKEND_URL)
    console.log(this.$route.params.id)
   this.$store.dispatch('fetchOneCafe', this.$route.params.id )
  }
}
</script>

<style  scoped>
.card {
    display: flex;
    justify-content: center;
}

</style>