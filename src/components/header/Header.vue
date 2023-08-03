<script setup>
import { ref } from "vue";

// Переиспользуемые компоненты
import Menu from "../layouts/Menu.vue";

// Логика
const searchActive = ref(false);

function toggleSearch() {
  searchActive.value = !searchActive.value;
}
</script>

<template>
  <header class="app__header header__container">
    <Menu class="header__menu" />
    <h1 class="header__title">Messenger</h1>
    <div class="header__search search-header">
      <button class="search-header__button _icon-search"></button>
    </div>
  </header>
</template>
