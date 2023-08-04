<script setup>
import { watch } from "vue";
import { useLayoutStore } from "@/stores/layout";

import Header from "@/components/header/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";

const layout = useLayoutStore();

// body fade if sidebar is active
watch(layout, () => {
  if (layout.sidebarActive) {
    document.body.classList.add("body-faded");
  } else {
    document.body.removeAttribute("class");
  }
});
</script>

<template>
  <Header />
  <Transition name="left-approach">
    <Sidebar v-if="layout.sidebarActive" />
  </Transition>
</template>
