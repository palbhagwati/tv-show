import ShowListItem from '../../../src/components/search-box'
import {
  mount
} from 'vue-test-utils'

let wrapper

describe('search-box.vue', () => {
  beforeEach(() => {
    wrapper = mount(ShowListItem)
  })
  it('should render correct contents', () => {
    expect(wrapper).toBeDefined()
  })

  it('should $emit event showQuery', () => {
    wrapper.vm.search()
    expect(wrapper.emitted('showQuery')).toBeTruthy()
  })

  it('should $emit event hideSearch', () => {
    var e = {
      keyCode: 12
    }
    wrapper.vm.checkInputLength(e)
    expect(wrapper.emitted('hideSearch')).toBeTruthy()
  })

  it('should $emit event showQuery', () => {
    var e = {
      keyCode: 13
    }
    wrapper.vm.checkInputLength(e)
    expect(wrapper.emitted('showQuery')).toBeTruthy()
  })

  it('should not $emit event', () => {
    var e = {
      keyCode: 11
    }
    wrapper.setData({ showQuery: 'test' })

    wrapper.vm.checkInputLength(e)
    expect(wrapper.emitted('showQuery')).not.toBeTruthy()
    expect(wrapper.emitted('hideSearch')).toBeFalsy()
  })
})
