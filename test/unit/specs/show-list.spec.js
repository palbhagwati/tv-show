import ShowList from '../../../src/components/show-list'
import ShowListItem from '../../../src/components/show-list-item'
import {
  createLocalVue,
  shallow
} from 'vue-test-utils'

const localVue = createLocalVue()
let wrapper

describe('show-list.vue', () => {
  const $route = {
    query: {}
  }

  beforeEach(() => {
    wrapper = shallow(ShowList, {
      localVue,
      mocks: {
        $route
      },
      propsData: {
        shows: [{url: 'url'}],
        allShow: true
      }
    })
  })
  it('should render correct contents', () => {
    expect(wrapper).toBeDefined()
  })

  it('check if child ShowListItem exists', () => {
    expect(wrapper.contains(ShowListItem)).toBe(true)
    expect(wrapper.props().allShow).toBe(true)
  })
})
