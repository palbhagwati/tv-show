import AllTvShows from '../../../src/shows/all-tv-shows'

import Vuex from 'vuex'
import {
  createLocalVue,
  shallow
} from 'vue-test-utils'

const localVue = createLocalVue()
let wrapper
localVue.use(Vuex)

describe('all-tv-shows.vue', () => {
  const storeMock = Object.freeze({
    state: {},
    actions: {
      getAllShowsAction: jest.fn().mockName('getAllShowsAction'),
      searchShowAction: jest.fn().mockName('searchShowAction')
    }
  })

  beforeEach(() => {
    jest.clearAllMocks()
    const store = new Vuex.Store(storeMock)

    wrapper = shallow(AllTvShows, {
      localVue,
      store
    })
  })
  it('should render correct contents', () => {
    expect(wrapper).toBeDefined()
  })

  it('should call searchShowAction to get search result', () => {
    wrapper.vm.search()
    expect(wrapper.vm.showSearch).toBe(true)
    expect(storeMock.actions.searchShowAction).toHaveBeenCalled()
  })

  it('should search result and show all the data', () => {
    wrapper.vm.hideSearch()
    expect(wrapper.vm.showSearch).toBe(false)
  })
})
