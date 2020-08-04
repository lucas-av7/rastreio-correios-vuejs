<template>
  <v-app>
    <Header>
    </Header>
    <Packages />
    <ButtonAddPackage @clickButton="showAddPackage = true" />
    <AddPackage v-if="showAddPackage" @hideAddPackage="showAddPackage = false" />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Packages from './components/Packages'
import ButtonAddPackage from './components/ButtonAddPackage'
import AddPackage from './components/AddPackage'

export default {
  name: 'App',
  components: { Header, Packages, ButtonAddPackage, AddPackage },
  data: () => ({
    showAddPackage: false
  }),
};
</script>