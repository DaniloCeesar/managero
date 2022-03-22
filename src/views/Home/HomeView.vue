<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <nav>
        <ul class="flex flex-wrap">
          <li>
            <RouterLink
              to="/"
              class="inline-block px-3 py-2 text-sm font-medium text-center rounded-lg text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
              >Tasks</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/board"
              class="inline-block px-3 py-2 text-sm font-medium text-center rounded-lg text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
            >
              Boards
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/users"
              class="inline-block px-3 py-2 text-sm font-medium text-center rounded-lg text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
            >
              Users
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/attachments"
              class="inline-block px-3 py-2 text-sm font-medium text-center rounded-lg text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
            >
              Attachments
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
