<template>
    <v-overlay>
      <v-card class="pa-3" color="primary" flat tile>
        <h3>Incluir Encomenda</h3>
      </v-card>
      <v-card flat tile color="white"
        class="ma-auto pa-3" width="344" height="170">
        <v-text-field
          light label="Título da encomenda"
          hide-details="auto" :rules="[rules.required]"
          v-model="titlePackage.text" :error="titlePackage.error">
        </v-text-field>
        <v-text-field
          light label="Código de rastreio"
          :rules="[rules.required, rules.counter]" maxlength="13"
          v-model="idPackage.text" :error="idPackage.error">
        </v-text-field>
      </v-card>
      <v-card flat tile light class="pa-3">
        <v-btn
          tile color="white"
          class="mr-2 blue--text"
          @click="$emit('hide-add-package')">Cancelar
        </v-btn>
        <v-btn tile color="primary"
          @click="addPackage">Salvar
        </v-btn>
      </v-card>
    </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: value => !!value || 'Campo obrigatório.',
        counter: value => (value && value.length == 13)
                  || 'O código deve conter 13 caracteres.',
      },
      titlePackage: { text: '', error: false },
      idPackage: { text: '', error: false }
    }
  },
  watch: {
    titlePackage: {
      deep: true,
      handler() {
        if(this.titlePackage.text) this.titlePackage.error = false
      }
    },
    idPackage: {
      deep: true,
      handler() {
        if(this.idPackage.text.length == 13) this.idPackage.error = false
      }
    }
  },
  methods: {
    addPackage() {
      if(!this.titlePackage.text) {
        this.titlePackage.error = true
      } else if (this.idPackage.text.length != 13 ) {
        this.idPackage.error = true
      } else {
        const newPackage = {
          title: this.titlePackage.text,
          id: this.idPackage.text
        }
        this.$store.dispatch('addPackage', newPackage)
        this.$emit('hide-add-package')
      }
    }
  }
}
</script>