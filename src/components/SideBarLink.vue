<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  to: string;
  label: string;
  trailingAccessory?: boolean;
}>();
</script>

<template>
  <RouterLink
    :to="to"
    class="flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg group hover:bg-gray-100 hover:text-indigo-500"
    active-class="text-indigo-700 bg-indigo-100"
  >
    <slot />
    <span class="flex-1 ml-3 whitespace-nowrap overflow-hidden text-ellipsis">{{ label }}</span>
    <slot name="trailingAccessory" />
  </RouterLink>
</template>
