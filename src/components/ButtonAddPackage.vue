<template>
  <v-btn fixed bottom right fab dark
    color="orange darken-3"
    @click="$emit('click-button')"  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonAddPackage'
}
</script>