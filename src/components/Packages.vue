<template>
  <v-card flat>
    <Package v-for="item in packages" :key="item.id" :item="item" />
  </v-card>
</template>

<script>
import Package from './Package'

export default {
  name: 'Packages',
  components: { Package },
  computed: {
    packages() {
      return this.$store.getters.getPackages
    }
  }
}
</script>