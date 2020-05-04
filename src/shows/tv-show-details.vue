<template>
  <div class="text-left">
    <v-btn
      text
      large
      @click="back()"
      color="primary"
      class="mb-4"
      > &laquo; Back</v-btn
    >
    <br />
    <div v-if="selectedShow">
      <div class="display-2">{{ selectedShow.name }}</div>
      <br />
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <div v-if="selectedShow.image">
              <img v-bind:src="selectedShow.image.medium" />
            </div>
          </v-flex>
          <v-flex xs12 sm8>
            <div><b>Name:</b> {{ selectedShow.name }}</div>
            <div><b>Language:</b> {{ selectedShow.language }}</div>

            <div v-html="'Summary: ' + selectedShow.summary"></div>
            <div><b>Rating:</b> {{ selectedShow.rating.average }}</div>
          </v-flex>
        </v-layout>
      </v-container>
      <h1>Show Cast</h1>
      <v-container>
        <div v-if="casts && casts.length > 0">
          <v-layout row wrap>
            <div v-for="cast in casts" :key="cast.id" class="pr-2">
              <div>{{ cast.person.name }}</div>
              <div v-if="cast.character.image">
                <img
                  v-bind:src="cast.character.image.medium"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </v-layout>
        </div>
        <div v-else>No record found</div>
      </v-container>
      <h1 class="pb-3">Episodes</h1>
      <div v-if="episodes">
        <v-row justify="center">
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(episode, key, index) in episodes"
              v-bind:key="index"
            >
              <v-expansion-panel-header>
                Session {{ key }}</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-container>
                  <v-layout row wrap justify-space-around>
                    <div
                      v-for="(item, index) in episode"
                      :key="item.id"
                      class="pb-4"
                    >
                      <div v-if="item.image">
                        <img v-bind:src="item.image.medium" />
                      </div>
                      <div style="max-width:250px">{{ index + 1 }} {{ item.name }}</div>
                      <div
                        class="caption elipse"
                        v-html="item.summary"
                      ></div>
                    </div>
                  </v-layout>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
      <h1 class="py-5">More Information</h1>
      <div>
       <div><b>Status:</b> {{selectedShow.status}}</div>
       <div><b>Type:</b> {{selectedShow.type}}</div>
       <div><b>Runtime:</b> {{selectedShow.runtime}}M</div>
       <div><b>Language:</b> {{selectedShow.language}}</div>
       <div><b>Genres:</b> <span v-for="g in selectedShow.genres" :key="g">
         {{g}} |
          </span></div>
       <div><b>Network:</b> {{selectedShow.network.country.name}}</div>
       <div><b>Schedule:</b> {{selectedShow.schedule.days}} at {{selectedShow.schedule.time}}</div>
       <div><b>Rating:</b> {{ selectedShow.rating.average }}</div>
      <div><b>Official site:</b> <a :href="selectedShow.officialSite" target="_blank">{{ selectedShow.officialSite }}</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '../router'

export default {
  name: 'TvShowDetails',
  mounted () {
    const value = this.$route.query.showId
    if (value) {
      this.$store.dispatch('selectedShowAction', value)
      this.$store.dispatch('selectedShowEpisodeAction', value)
      this.$store.dispatch('selectedShowCastsAction', value)
    }
  },
  computed: {
    ...mapState(['selectedShow', 'episodes', 'casts'])
  },
  methods: {
    back () {
      router.push({ name: 'categorizeShows' })
    }
  }
}
</script>

<style scopped>
  .elipse{
    width: 250px;
    height: 3em;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
