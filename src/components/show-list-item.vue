<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <router-link :to="{ name: 'ShowDetails', query: { showId: show.id } }" >
          <div v-if="show.image" v-on="on" >
            <img v-bind:src="show.image.medium" style="border-radius: 5px;" />
          </div>
          <div v-else>
            <img
              src="../assets/no-img-portrait-text.png"
              height="290"
              width="210"
            />
          </div>
          <div class="subtitle-1">{{ show.name }}</div>
          <div v-if="show.rating && show.rating.average" class="caption">
            Rating: {{ show.rating.average }}
          </div>
          <div v-else class="caption">Rating: N/A</div>
        </router-link>
      </template>
      <span v-html="show.url"></span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'ShowListItem',
  props: {
    show: {}
  }
}
</script>

<style></style>
