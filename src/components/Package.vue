<template>
  <v-card flat tile class="pa-2 mb-2">
    <h3>{{ item.title }}</h3>
    <h4 class="green--text">{{ item.status }}</h4>
    <p>{{ item.id }}</p>
    <hr>
  </v-card>
</template>

<script>
export default {
  name: 'Package',
  props: ['item']
}
</script>