import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutStore = defineStore("layout", () => {
  const sidebarActive = ref(false);

  return { sidebarActive };
});
