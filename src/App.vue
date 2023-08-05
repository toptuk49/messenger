<script setup>
import { useLayoutStore } from "@/stores/layout";

import Header from "@/components/header/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import ChatsList from "./components/chats-list/ChatsList.vue";

const layout = useLayoutStore();

function onEnter() {
  document.body.classList.add("sidebar-active");
}

function onLeave() {
  document.body.removeAttribute("class");
}
</script>

<template>
  <Header />
  <Transition name="left-approach" @enter="onEnter" @leave="onLeave">
    <Sidebar v-if="layout.sidebarActive" />
  </Transition>
  <ChatsList />
</template>
