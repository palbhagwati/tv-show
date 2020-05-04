<template>
  <div>
    <div class="display-1 text-left pl-3 mb-5">TV Shows</div>
    <SearchBox @showQuery="search" @hideSearch="hideSearch"></SearchBox>

    <div v-if="allShows && !showSearch">
        <ShowList :shows="allShows" :allShow="true"></ShowList>
    </div>

    <div v-if="filterShows && showSearch">
      <div v-if="filterShows.length>0">
        <FilteredShowList :filterShows="filterShows"></FilteredShowList>
      </div>
      <div v-else>No show found</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShowList from '../components/show-list'
import FilteredShowList from '../components/filtered-show-list'
import SearchBox from '../components/search-box'

export default {
  name: 'AllTvShows',
  data () {
    return {
      showSearch: false
    }
  },
  components: {
    ShowList,
    FilteredShowList,
    SearchBox
  },
  mounted () {
    this.$store.dispatch('getAllShowsAction')
  },
  computed: {
    ...mapState(['allShows', 'filterShows'])
  },
  methods: {
    search (value) {
      this.showSearch = true
      this.$store.dispatch('searchShowAction', value)
    },
    hideSearch () {
      this.showSearch = false
    }
  }
}
</script>
