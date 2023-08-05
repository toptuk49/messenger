<script setup>
import { useLayoutStore } from "@/stores/layout";

// Переиспользуемые компоненты
import Menu from "../layouts/Menu.vue";

// Sidebar logic
const layout = useLayoutStore();

function toggleSidebar() {
  layout.sidebarActive = !layout.sidebarActive;
}
</script>

<template>
  <header class="app__header header__container">
    <Menu class="header__menu" @click="toggleSidebar" />
    <h1 class="header__title">Messenger</h1>
    <div class="header__search search-header">
      <button class="search-header__button _icon-search"></button>
    </div>
  </header>
</template>
