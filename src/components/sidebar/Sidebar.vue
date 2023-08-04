<script setup></script>

<template>
  <section class="sidebar">
    <div class="sidebar__header header-sidebar">
      <div class="header-sidebar__avatar"></div>
      <h1 class="header-sidebar__nickname">Антон</h1>
      <div class="header-sidebar__status status-sidebar">
        <span class="status-sidebar__icon"></span
        ><span class="status-sidebar__text">онлайн</span>
      </div>
    </div>
    <span class="sidebar__stack">Made with Vue.js Framework</span>
    <div class="sidebar__menu menu-sidebar">
      <div class="menu-sidebar__item">
        <div class="menu-sidebar__icon _icon-settings"></div>
        <div class="menu-sidebar__name">Настройки</div>
      </div>
      <div class="menu-sidebar__item">
        <div class="menu-sidebar__icon _icon-contacts"></div>
        <div class="menu-sidebar__name">Контакты</div>
      </div>
    </div>
    <div class="sidebar__footer footer-sidebar">
      <div class="footer-sidebar__text">
        Messenger версия 0.0.0<br />04.08.2023
      </div>
    </div>
  </section>
</template>
