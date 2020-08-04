<template>
  <v-app>
    <Header />
    <div class="container">
      <Error />
      <Packages />
    </div>
    <ButtonAddPackage @click-button="showAddPackage = true" />
    <AddPackage v-if="showAddPackage" @hide-add-package="showAddPackage = false" />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Error from './components/Error'
import Packages from './components/Packages'
import ButtonAddPackage from './components/ButtonAddPackage'
import AddPackage from './components/AddPackage'

export default {
  name: 'App',
  components: { Header, Packages, ButtonAddPackage, AddPackage, Error },
  data: () => ({
    showAddPackage: false
  })
}
</script>

<style>
  .container {
    margin-top: 100px;
  }
</style>