<template>
  <div>
    <div class="display-1 text-left mb-5 pl-5">TV Shows</div>
    <SearchBox @showQuery="search" @hideSearch="hideSearch"></SearchBox>

    <div v-if="loading">
        <v-progress-circular
          :size="70"
          color="primary"
          indeterminate
        ></v-progress-circular>
    </div>
    <div v-if="shows && !showSearch">
      <div v-for="(item, key, index) in shows" v-bind:key="index" class="pb-9">
        <div class="headline text-left pl-5" v-if="key">{{ key }}</div>
        <div class="headline text-left pl-5"  v-else>Unknown</div>
        <ShowList :shows="shows[key]"></ShowList>
      </div>
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
  name: 'CategorizeTvShows',
  data () {
    return {
      showSearch: false,
      loading: {type: Boolean}
    }
  },
  components: {
    ShowList,
    FilteredShowList,
    SearchBox
  },
  mounted () {
    this.loading = true
    this.$store.dispatch('getShowsAction').then((data) => {
      this.loading = false
    })
  },
  computed: {
    ...mapState(['shows', 'filterShows'])
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
