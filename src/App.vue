<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <div class="grid grid-cols-[223px_1fr_223px]">
    <SideBar />
    <RouterView />
    <div>calendario</div>
  </div>
</template>
