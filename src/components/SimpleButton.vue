<template>
  <div>
    <button @click="incremento">{{ texto }}</button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    vezes () {
      return this.$store.getters.contador === 1 ? 'vez' : 'vezes'
    },
    texto () {
      return `Clicado ${this.$store.getters.contador} ${this.vezes}`
    }
  },
  methods: {
    incremento () {
      this.$store.commit('incremento')
    }
  }
}
</script>