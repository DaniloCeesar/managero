<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <div class="grid grid-cols-3">
    <SideBar />
    <RouterView />
    <div>calendario</div>
  </div>
</template>
