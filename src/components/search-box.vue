<template>
  <v-container>
      <v-layout class="pl-3">
        <v-flex xs9>
          <v-text-field
            label="Search show"
            v-model="showQuery"
            single-line
            outlined
            @keyup.native="checkInputLength"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="pt-3">
          <v-btn depressed large @click="search()" color="primary"
            >Search</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      showQuery: ''
    }
  },
  methods: {
    search () {
      this.$emit('showQuery', this.showQuery)
    },
    checkInputLength (e) {
      if (this.showQuery.length === 0) {
        this.$emit('hideSearch')
      }
      if (e.keyCode === 13) {
        this.$emit('showQuery', this.showQuery)
      }
    }
  }
}
</script>

<style>

</style>
