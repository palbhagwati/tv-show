import Vue from 'vue'
import Router from 'vue-router'
import CategorizeTvShows from '../shows/categorize-tv-shows'
import AllTvShows from '../shows/all-tv-shows'
import TvShowDetails from '../shows/tv-show-details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'categorizeShows',
      component: CategorizeTvShows
    },
    {
      path: '*',
      name: 'categorizeShows',
      component: CategorizeTvShows
    },
    {
      path: '',
      name: 'categorizeShows',
      component: CategorizeTvShows
    },
    {
      path: '/all-shows',
      name: 'allShows',
      component: AllTvShows
    },
    {
      path: '/show-detail',
      name: 'ShowDetails',
      component: TvShowDetails
    }
  ]
})
