<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import PlusIcon from '@/icons/PlusIcon.vue';
import SearchIcon from '@/icons/SearchIcon.vue';

const links = [
  {
    id: 1,
    to: '/',
    label: 'Tasks',
  },
  {
    id: 2,
    to: '/board',
    label: 'Board',
  },
  {
    id: 3,
    to: '/users',
    label: 'Users',
  },
  {
    id: 4,
    to: '/attachments',
    label: 'Attachments',
  },
];
</script>

<template>
  <div>
    <header class="flex items-center justify-between px-4 py-3">
      <nav>
        <ul class="flex flex-wrap gap-2">
          <li v-for="link in links" :key="link.id">
            <RouterLink
              :to="link.to"
              class="inline-block px-3 py-2 text-sm font-medium text-center rounded-lg text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
              exact-active-class="text-indigo-700 bg-indigo-100"
              >{{ link.label }}</RouterLink
            >
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-2 ml-auto">
        <div class="relative text-gray-500">
          <input
            type="search"
            name="serch"
            placeholder="Search&hellip;"
            class="w-full h-10 px-5 pr-10 text-sm transition-all bg-transparent border border-gray-200 rounded-md shadow-sm hover:shadow focus:ring-0 focus:outline-none focus:bg-white hover:bg-white"
          />
          <button type="submit" class="absolute top-0 mt-3 mr-4 right-1">
            <SearchIcon />
          </button>
        </div>

        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 text-sm font-semibold text-center text-white transition duration-200 ease-in bg-indigo-500 rounded-lg shadow-sm hover:shadow hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          title="New task"
        >
          <PlusIcon />
        </button>
      </div>
    </header>
    <main class="pt-4 overflow-y-auto border rounded-t-md drop-shadow-sm">
      <RouterView />
    </main>
  </div>
</template>
