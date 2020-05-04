import TvShowDetails from '../../../src/shows/tv-show-details'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
let wrapper
localVue.use(Vuetify)
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('tv-show-details.vue', () => {
  const storeMock = Object.freeze({
    state: {},
    actions: {
      selectedShowAction: jest.fn().mockName('selectedShowAction'),
      selectedShowEpisodeAction: jest.fn().mockName('selectedShowEpisodeAction'),
      selectedShowCastsAction: jest.fn().mockName('selectedShowCastsAction')
    }
  })

  beforeEach(() => {
    jest.clearAllMocks()
    const store = new Vuex.Store(storeMock)

    wrapper = shallowMount(TvShowDetails, {
      localVue,
      store,
      router
    })
  })
  it('should render correct contents', () => {
    expect(wrapper).toBeDefined()
  })
})
