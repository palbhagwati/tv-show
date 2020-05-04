import ShowListItem from '../../../src/components/show-list-item'
import {
  createLocalVue,
  shallow
} from 'vue-test-utils'

const localVue = createLocalVue()
let wrapper

describe('show-list-item.vue', () => {
  const $route = {
    query: {}
  }

  beforeEach(() => {
    wrapper = shallow(ShowListItem, {
      localVue,
      mocks: {
        $route
      },
      propsData: {
        show: {url: 'url'}
      }
    })
  })
  it('should render correct contents', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.props().show.url).toBe('url')
  })
})
