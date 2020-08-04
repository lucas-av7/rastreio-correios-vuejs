<template>
    <v-overlay>
      <v-card class="pa-3" color="primary" flat tile>
        <h3>Incluir Encomenda</h3>
      </v-card>
      <v-card tile color="white" class="ma-auto pa-3" width="344" height="150">
        <v-text-field
          light color="red" label="Título da encomenda"
          hide-details="auto" :rules="titleRules">
        </v-text-field>
        <v-text-field
          light label="Código de rastreio"
          :rules="idRules" maxlength="13">
        </v-text-field>
      </v-card>
      <v-card tile="" flat light class="pa-3">
        <v-btn
          tile color="white"
          class="mr-2 blue--text"
          @click="$emit('hideAddPackage')">Cancelar
        </v-btn>
        <v-btn tile color="primary">Salvar</v-btn>
      </v-card>
    </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      titleRules: [
        value => !!value || 'Campo obrigatório.',
      ],
      idRules: [
        value => !!value || 'Campo obrigatório.',
        value => (value && value.length == 13) || 'O código deve conter 13 caracteres.',
      ]
    }
  }
}
</script>