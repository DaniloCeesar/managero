<script setup lang="ts">
import { computed, ref } from 'vue';

export type TaskRowProps = {
  id?: number;
  name: string;
  checked: boolean;
  status: 'done' | 'in-progress';
  assignes: Array<string>;
  icon: 'cloud' | 'star' | 'server' | 'cube';
  background: string;
  foreground: string;
};

const props = defineProps<TaskRowProps>();

const checked = ref(props.checked);

const statusLabel = computed(() => {
  if (checked.value) return 'Done';
  return 'In progress';
});

const statusStyles = computed(() => {
  if (checked.value) return 'text-green-800 bg-green-100';
  return 'text-orange-800 bg-orange-100';
});

const checkboxStyles = computed(() => {
  if (checked.value) return 'bi bi-check-circle-fill text-indigo-500';
  return 'bi bi-circle text-gray-500';
});

const toggleChecked = () => {
  checked.value = !checked.value;
};
</script>

<template>
  <tr>
    <td class="flex items-center gap-3 px-6 py-3 whitespace-nowrap">
      <div class="flex items-center">
        <label class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 icon icon-tabler icon-tabler-square-check"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="checkboxStyles"
            @click="toggleChecked"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />

            <path d="M9 12l2 2l4 -4" v-if="checked" />
          </svg>
        </label>
        <a class="ml-2 text-sm text-gray-700 group-hover:text-gray-900" title="View this task"
          >New task</a
        >
      </div>
      <a
        href="#"
        class="flex items-center text-gray-400 hover:text-indigo-500"
        title="View comments for this task"
        v-if="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 icon icon-tabler icon-tabler-message-circle"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          <line x1="12" y1="12" x2="12" y2="12.01" />
          <line x1="8" y1="12" x2="8" y2="12.01" />
          <line x1="16" y1="12" x2="16" y2="12.01" />
        </svg>
        <p class="ml-1 text-sm leading-none">2</p>
      </a>
      <a
        href="#"
        class="flex items-center text-gray-400 hover:text-indigo-500"
        title="View attachments for this task"
        v-if="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 icon icon-tabler icon-tabler-paperclip"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"
          />
        </svg>
        <p class="ml-1 text-sm leading-none">5</p>
      </a>
      <a
        href="#"
        class="flex items-center text-gray-400 hover:text-indigo-500"
        title="Pinned task"
        v-if="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 rotate-45 icon icon-tabler icon-tabler-pinned"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
          <line x1="12" y1="16" x2="12" y2="21" />
          <line x1="8" y1="4" x2="16" y2="4" />
        </svg>
      </a>
    </td>
    <td class="px-6 whitespace-nowrap">
      <span
        class="inline-flex px-2 text-xs font-medium leading-5 rounded"
        title="Filter by this status"
        :class="statusStyles"
        >{{ statusLabel }}</span
      >
    </td>
    <td class="px-6 whitespace-nowrap">
      <button>
        <img class="w-6 h-6 rounded-full" src="/avatar.svg" title="Default User" />
      </button>
    </td>
    <td class="gap-1 px-6 whitespace-nowrap">
      <button
        class="inline-flex p-1 mr-1 text-xs font-semibold leading-5 rounded"
        :class="[background, foreground]"
        title="Filter by this folder"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            v-if="icon == 'cloud'"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            v-if="icon == 'star'"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            v-if="icon == 'server'"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            v-if="icon == 'cube'"
          />
        </svg>
      </button>
    </td>
    <td class="gap-1 px-6 whitespace-nowrap" />
  </tr>
</template>
