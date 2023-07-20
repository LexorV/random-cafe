<template>
  <main>
    <div class="list-cafe" v-loading="$store.state.loading"> 
      <CafeCard v-for="cafe in $store.state.cafe"
      :key="cafe.id"
      :cafe="cafe"
      />
    </div>
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
@media screen and (max-width: 700px) {
  .list-cafe{
       flex-direction: column;
       align-items: center;
    }
}
ul {
  list-style-type: none;
  padding: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
