<template>
  <main>
    <ul class="list-cafe" v-loading="this.$store.state.loading"> 
      <CafeCard v-for="cafe in $store.state.cafe"
      :key="cafe.id"
      :cafe="cafe"
      />
    </ul>
  </main>
</template>

<script>
import CafeCard from "@/components/CafeCard.vue" 
export default {
  name: 'CafeFeed',
  components: {
    CafeCard
  },
  props: {
    msg: String
  },
  data() {
    return {
      testData: [],
    }
  },
 async mounted() {
    this.$store.dispatch('fetchCafe')
  },
  watch:  {
    testData() {
      console.log(this.$store.state.cafe)
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-cafe {
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
