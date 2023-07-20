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