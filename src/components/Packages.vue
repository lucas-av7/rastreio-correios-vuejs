<template>
  <v-card flat class="packages px-5">
    <Package />
  </v-card>
</template>

<script>
import Package from './Package'

export default {
  name: 'Packages',
  components: { Package }
}
</script>

<style>
  .packages {
    margin-top: 115px;
  }
</style>