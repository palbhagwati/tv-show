<template>
  <div>
    <v-container>
      <div v-if="!allShow">
        <v-layout no-wrap style="overflow: scroll">
          <div v-for="show in shows" :key="show.id" class="px-3">
            <v-flex xs12>
              <ShowListItem :show="show"></ShowListItem>
            </v-flex>
          </div>
        </v-layout>
      </div>
      <div v-else>
        <v-layout row wrap justify-space-around>
          <div v-for="show in shows" :key="show.id" class="px-3">
            <v-flex xs12>
              <ShowListItem :show="show"></ShowListItem>
            </v-flex>
          </div>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import ShowListItem from './show-list-item'

export default {
  name: 'ShowList',
  props: {
    shows: {},
    allShow: Boolean
  },
  components: {
    ShowListItem
  }
}
</script>
