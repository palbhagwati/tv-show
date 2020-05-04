import FilteredShowList from '../../../src/components/filtered-show-list'
import ShowListItem from '../../../src/components/show-list-item'
import {
  createLocalVue,
  shallow
} from 'vue-test-utils'

const localVue = createLocalVue()
let wrapper

describe('filtered-show-list.vue', () => {
  const $route = {
    query: {}
  }

  beforeEach(() => {
    wrapper = shallow(FilteredShowList, {
      localVue,
      mocks: {
        $route
      },
      propsData: {
        filterShows: [{url: 'url'}]
      }
    })
  })
  it('should render correct contents', () => {
    expect(wrapper).toBeDefined()
  })

  it('check if child ShowListItem exists', () => {
    expect(wrapper.contains(ShowListItem)).toBe(true)
  })
})
