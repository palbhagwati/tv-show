<template>
  <v-app>
    <v-app-bar color="secondary" app flat>
      <!-- -->
      <div class="title">TV Manager </div>&nbsp;&nbsp;&nbsp;&nbsp;
      <v-layout class="text-left">
        <v-flex >
          <router-link :to="{ name: 'categorizeShows' }">Categorized show</router-link> &nbsp;|
          &nbsp;<router-link :to="{name: 'allShows'}">All shows</router-link>
        </v-flex>
      </v-layout>
    </v-app-bar>
    <v-content class="content">
      <v-container fluid class="paper">
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app color="secondary">
      <!-- -->
      <div>
      <span style="color:#2c3e50">
        Disclaimer | Privacy | Cookies | Security | US Persons | Sitemap
      </span>
      <span class="text-right"> &copy;</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.paper {
  margin: 0 auto;
  max-width: 900px;
  background-color: white;
  border-radius: 5px;
  margin-top: 24px;
  margin-bottom: 20px;
}

.content {
  background-color: #f5f5f5;
}
a:link {
  text-decoration: none !important;
}
a,
a:visited,
a:hover,
a:active {
  color: #00897b;
}

.router-link-exact-active{
  font-weight: 700;
}
</style>
