<template>
  <v-card flat tile>
    <v-alert
      v-for="(error, index) in errors"
      :key="index"
      type="error" class="mx-auto mt-2"
      max-width="350">
      <v-row align="center">
        <v-col class="grow pa-0">
          {{ error }}
        </v-col>
        <v-col class="shrink pa-0 mr-2">
          <v-btn
            fab color="white"
            class="red--text"
            depressed width="20" height="20"
            @click="closeError(index)">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-card>
</template>

<script>
export default {
  computed: {
    errors() {
      return this.$store.getters.errors
    }
  },
  methods: {
    closeError(index) {
      this.$store.dispatch('closeError', index)
    }
  }
}
</script>