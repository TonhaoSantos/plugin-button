const store = {
    state: {
      contador: 0
    },
    getters: {
      contador: state => state.contador
    },
    mutations: {
      incremento (state) {
        state.contador += 1
      }
    }
}
export default store