import { createStore } from 'vuex'
import axios from 'axios';

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      cafe: [],
      loading: false
    }
  },
  mutations: {
    SET_CAFE (state, data) {
      state.cafe = data
    },
    SWITCH_LOADING (state) {
      state.loading = !state.loading
    }

  },
  getters: {
    randomeCafe: (state) => () => {
      const cafeRandomIndex = Math.floor(Math.random() * state.cafe.length)
      return state.cafe[cafeRandomIndex]
    }
  },
  actions: {
    async fetchCafe({commit}) {
      commit('SWITCH_LOADING')
      try {
        const res = await axios.get('https://bandaumnikov.ru/api/test/site/get-index')
        commit('SET_CAFE', res.data.data)
        }
        catch (error) {
          console.log(error)
      }
        finally {
          commit('SWITCH_LOADING')
        }
      
    }
  },
})
export default store