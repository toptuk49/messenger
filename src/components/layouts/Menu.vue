<script setup>
import { ref } from "vue";

const menuOpened = ref(false);

function menuToggle() {
  menuOpened.value = !menuOpened.value;
}
</script>

<template>
  <div class="menu">
    <button
      type="button"
      :class="['menu__icon', 'icon-menu', { 'menu-open': menuOpened }]"
      @click="menuToggle"
    >
      <!-- ::before -->
      <span></span>
      <!-- ::after -->
    </button>
    <nav class="menu__body">
      <ul class="menu__list">
        <li class="menu__item"><a href="" class="menu__link"></a></li>
      </ul>
    </nav>
  </div>
</template>
