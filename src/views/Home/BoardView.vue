<script setup lang="ts">
import TaskBoard from '@/components/Task/TaskBoard.vue';
</script>

<template>
  <div class="grid grid-cols-[237px_237px] px-10 mt-5 gap-4">
    <div>
      <div class="flex items-center px-2 mb-5">
        <h2 class="text-sm font-semibold">
          In progress
          <span class="text-sm font-semibold text-indigo-500 ml-2">13</span>
        </h2>
        <button
          class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 icon icon-tabler icon-tabler-dots-vertical"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
          </svg>
        </button>
      </div>
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
    </div>

    <div>
      <div class="flex items-center px-2 mb-5">
        <h2 class="text-sm font-semibold">
          Done
          <span class="text-sm font-semibold text-indigo-500 ml-2">4</span>
        </h2>
        <button
          class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 icon icon-tabler icon-tabler-dots-vertical"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
          </svg>
        </button>
      </div>
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
    </div>
  </div>
</template>
