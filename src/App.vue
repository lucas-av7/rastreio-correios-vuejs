<template>
  <v-app>
    <Header>
    </Header>
    <Packages />
    <ButtonAddPackage @click-button="showAddPackage = true" />
    <AddPackage v-if="showAddPackage" @hide-add-package="showAddPackage = false" />
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