<template>
  <v-app-bar app color="blue" hide-on-scroll>
    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">Rastreio Correios</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon color="white">mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon color="white">mdi-chevron-down</v-icon>
    </v-btn>

    <template v-slot:extension>
      <TabMenu />
    </template>
  </v-app-bar>
</template>

<script>
import TabMenu from './TabMenu'
export default {
  name: 'Header',
  components: { TabMenu }
}
</script>
