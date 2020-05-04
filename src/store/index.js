import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shows: [],
    allShows: [],
    filterShows: [],
    selectedShow: null,
    episodes: [],
    casts: []
  },
  mutations: {
    CHANGE_SHOWS (state, shows) {
      state.shows = shows
    },
    CHANGE_ALL_SHOWS (state, shows) {
      state.allShows = shows
    },
    FILTER_SHOWS (state, shows) {
      state.filterShows = shows
    },
    SELECTED_SHOWS (state, shows) {
      state.selectedShow = shows
    },
    SELECTED_SHOWS_EPISODES (state, episodes) {
      state.episodes = episodes
    },
    SELECTED_SHOWS_CASTS (state, casts) {
      state.casts = casts
    }
  },
  actions: {
    getShowsAction (state) {
      return new Promise((resolve, reject) => {
        axios.get('http://api.tvmaze.com/shows')
          .then((response) => {
            const value = _.orderBy(response.data, 'rating.average', 'desc')
            const data = _.groupBy(value, 'genres')
            state.commit('CHANGE_SHOWS', data)
            resolve()
          })
          .catch(() => {
            reject(new Error('Technical Error'))
          })
      })
    },
    getAllShowsAction (state) {
      axios.get('http://api.tvmaze.com/shows').then((response) => {
        state.commit('CHANGE_ALL_SHOWS', response.data)
      })
    },
    searchShowAction (state, query) {
      axios.get('http://api.tvmaze.com/search/shows?q=' + query).then((response) => {
        state.commit('FILTER_SHOWS', response.data)
      })
    },
    selectedShowAction (state, query) {
      axios.get('http://api.tvmaze.com/shows/' + query).then((response) => {
        state.commit('SELECTED_SHOWS', response.data)
      })
    },
    selectedShowEpisodeAction (state, query) {
      axios.get('http://api.tvmaze.com/shows/' + query + '/episodes').then((response) => {
        const data = _.groupBy(response.data, 'season')
        state.commit('SELECTED_SHOWS_EPISODES', data)
      })
    },
    selectedShowCastsAction (state, query) {
      axios.get('http://api.tvmaze.com/shows/' + query + '/cast').then((response) => {
        state.commit('SELECTED_SHOWS_CASTS', response.data)
      })
    }
  }

})
