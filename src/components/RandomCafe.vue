<template>
    <div class="random">
        <el-button @click="startRandom" size="large" type="primary">{{cafe?'Ещё раз':'Пуск'}}</el-button>
        <CafeCard v-if="cafe" :cafe="cafe"/>
    </div>
</template>

<script>
import CafeCard from "@/components/CafeCard.vue" 
import { mapState, mapGetters } from 'vuex';
export default {
    name: 'RandomCafe',
  components: {
    CafeCard
  },
  data() {
    return {
        cafe: null
    }
  },
  computed: {
    ...mapState([
            'cafe'
        ]),
        ...mapGetters([
            'randomeCafe',
        ]),
  },
  methods: {
    startRandom() {
        this.cafe = this.randomeCafe()
    }
  }
}
</script>

<style scoped>
.random {
    display: flex;
    flex-direction: column;
   align-items: center;
   gap: 30px;
}

</style>