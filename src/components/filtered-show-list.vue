<template>
  <div>
     <v-container>
        <v-layout row wrap justify-space-around>
            <div v-for="show in filterShows" :key="show.id">
              <v-flex xs12>
                <ShowListItem :show="show.show"></ShowListItem>
              </v-flex>
            </div>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import ShowListItem from './show-list-item'

export default {
  name: 'FilteredShow',
  props: {
    filterShows: {}
  },
  components: {
    ShowListItem
  }

}
</script>

<style>

</style>
