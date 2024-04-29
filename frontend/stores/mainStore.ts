import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isAppLoaded: false,
  }),
  actions: {
    setAppLoaded(loaded: boolean) {
      this.isAppLoaded = loaded;
    },
  },
  getters: {
    isAppLoaded: (state) => state.isAppLoaded, // Usa una función que retorna el estado
  },
});
