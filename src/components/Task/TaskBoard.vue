<script setup lang="ts"></script>

<template>
  <div
    class="relative flex flex-col items-start p-4 mt-3 transition bg-white border rounded-lg shadow cursor-pointer bg-opacity-90 group hover:bg-opacity-100 hover:shadow-md"
  >
    <h3 class="text-sm font-medium">New task</h3>
    <div class="flex items-center gap-4 mt-3">
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
    </div>
  </div>
</template>
