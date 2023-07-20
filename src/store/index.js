import { createStore } from 'vuex'
import axios from 'axios';

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      cafe: [],
      loading: false,
      oneCafe: null
    }
  },
  mutations: {
    SET_CAFE (state, data) {
      state.cafe = data
    },
    SET_ONE_CAFE (state, data) {
      state.oneCafe = data
    },
    SWITCH_LOADING (state) {
      state.loading = !state.loading
    }

  },
  getters: {
    randomCafe: (state) => () => {
      const cafeRandomIndex = Math.floor(Math.random() * state.cafe.length)
      return state.cafe[cafeRandomIndex]
    },
    oneCafe: (state) => (id) => {
      console.log(state.cafe)
      return state.cafe.find(cafe => cafe.id === id)
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
    },
    async fetchOneCafe({commit}, id) {
      commit('SWITCH_LOADING')
      try {
        const res = await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${id}`)
        console.log(res.data.data)
        commit('SET_ONE_CAFE', res.data.data)
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