<template>
  <v-app>
    <Header>
    </Header>
    <Packages />
    <ButtonAddPackage />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Packages from './components/Packages'
import ButtonAddPackage from './components/ButtonAddPackage'

export default {
  name: 'App',
  components: { Header, Packages, ButtonAddPackage },
  data: () => ({
    //
  }),
};
</script>