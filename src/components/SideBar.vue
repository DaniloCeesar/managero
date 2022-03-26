<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import SideBarLink from '@/components/SideBarLink.vue';

const sidebarSortedIsOpen = ref(true);
const sidebarFavoritesIsOpen = ref(true);
const userDropdownIsOpen = ref(true);

const lists = ref([
  {
    id: 'ea4838a2-90a9-4160-a374-2fe9e0236f94',
    title: "application's landing page",
    icon: 'cloud',
    background: 'bg-blue-100',
    foreground: 'text-blue-800',
  },
  {
    id: '69205156-4213-4009-82fa-cd01c0a356b4',
    title: 'server planning',
    icon: 'server',
    background: 'bg-purple-100',
    foreground: 'text-purple-800',
  },
  {
    id: '78dcda9b-bb2a-4f18-a2c6-2e9c8384ae7e',
    title: 'Checklist for the first app release',
    icon: 'cube',
    background: 'bg-orange-100',
    foreground: 'text-orange-800',
    is_favorite: true,
  },
]);
</script>

<template>
  <aside class="flex flex-col min-h-screen bg-slate-50">
    <div class="px-4 py-5">
      <RouterLink to="/" class="flex items-center text-lg font-bold text-indigo-800 rounded-lg">
        <img src="@/assets/apple-touch-icon.png" class="w-6 h-6" alt="manaĝero" />
        <span class="ml-3">manaĝero</span>
      </RouterLink>
    </div>

    <div
      class="px-3 overflow-y-auto rounded"
      x-data="{ navbarActive: 'inbox', sidebarFavoritesIsOpen: (lists.length > 0), sidebarSortedIsOpen: false, }"
    >
      <ul class="mt-2 space-y-1">
        <li>
          <SideBarLink to="/activity" label="Activity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-bolt icon-tabler-inbox group-hover:text-indigo-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
            </svg>
          </SideBarLink>
        </li>

        <li>
          <SideBarLink to="/" label="My tasks">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-circle-check icon-tabler-inbox group-hover:text-indigo-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
            <template #trailingAccessory>
              <span
                class="inline-flex items-center justify-center px-2 ml-3 text-xs font-bold rounded-full text-gray-700/50"
                >15</span
              >
            </template>
          </SideBarLink>
        </li>

        <li class="pt-4">
          <button
            type="button"
            class="flex items-center w-full p-2 text-xs font-medium text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100"
            aria-controls="sidebar-dropdown-sorted"
            title="Show/hide panel"
            @click.prevent="sidebarSortedIsOpen = !sidebarSortedIsOpen"
          >
            <span class="flex-1 text-left whitespace-nowrap">Smart Folders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 icon icon-tabler icon-tabler-chevron-down"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              :class="sidebarSortedIsOpen ? 'rotate-180' : ''"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <ul class="py-0 space-y-0" v-if="sidebarSortedIsOpen">
            <li>
              <SideBarLink to="/due-today" label="Due Today">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-calendar-event group-hover:text-indigo-500"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
              </SideBarLink>
            </li>
            <li>
              <SideBarLink to="/upcoming" label="Upcoming">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-calendar-time group-hover:text-indigo-500"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"
                  />
                  <circle cx="18" cy="18" r="4" />
                  <path d="M15 3v4" />
                  <path d="M7 3v4" />
                  <path d="M3 11h16" />
                  <path d="M18 16.496v1.504l1 1" />
                </svg>
              </SideBarLink>
            </li>
            <li>
              <SideBarLink to="/pinned" label="Pinned">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-indigo-500 transition duration-75 rotate-45 icon icon-tabler icon-tabler-pinned group-hover:text-indigo-500"
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
              </SideBarLink>
            </li>
            <li>
              <SideBarLink to="/recent" label="Recent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-history group-hover:text-indigo-500"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="12 8 12 12 14 14" />
                  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
              </SideBarLink>
            </li>
            <li>
              <SideBarLink to="/trash" label="Trash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-trash group-hover:text-indigo-500"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </SideBarLink>
            </li>
          </ul>
        </li>

        <li class="pt-2">
          <button
            type="button"
            class="flex items-center w-full p-2 text-xs font-semibold text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100"
            aria-controls="sidebar-dropdown-folders"
            title="Show/hide panel"
            @click.prevent="sidebarFavoritesIsOpen = !sidebarFavoritesIsOpen"
          >
            <span class="flex-1 text-left whitespace-nowrap">Folders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 icon icon-tabler icon-tabler-chevron-down"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              :class="sidebarFavoritesIsOpen ? 'rotate-180' : ''"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <ul id="sidebar-dropdown-folders" class="py-0 space-y-0" v-if="sidebarFavoritesIsOpen">
            <li v-for="list in lists" :key="list.id">
              <SideBarLink :to="list.title" :label="list.title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-indigo-500 transition duration-75 icon icon-tabler icon-tabler-folder"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :class="list.foreground + '/80'"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    v-if="list.icon == 'cloud'"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    v-if="list.icon == 'star'"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    v-if="list.icon == 'server'"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    v-if="list.icon == 'cube'"
                  />
                </svg>
                <template #trailingAccessory>
                  <span
                    class="inline-flex items-center justify-center p-1 ml-3 text-sm font-normal text-gray-500 rounded-full group-hover:text-gray-500"
                    v-if="list.is_favorite"
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6"></path>
                      <line x1="12" y1="16" x2="12" y2="21"></line>
                      <line x1="8" y1="4" x2="16" y2="4"></line>
                    </svg>
                  </span>
                </template>
              </SideBarLink>
            </li>

            <div class="pt-1"></div>

            <li>
              <button
                class="flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-indigo-500 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 icon icon-tabler icon-tabler-plus"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span class="flex-1 ml-4 whitespace-nowrap">New folder</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="p-3 mt-auto">
      <div @click="userDropdownIsOpen = !userDropdownIsOpen">
        <span class="inline-flex w-full rounded-md">
          <button
            type="button"
            class="inline-flex items-center justify-between w-full p-2 transition rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 active:bg-gray-50 group"
          >
            <img class="w-8 h-8 rounded-full" src="/avatar.svg" title="Default User" />

            <div class="flex flex-col items-start ml-3">
              <p class="text-sm font-medium text-gray-700" x-text="users[0]['first_name']"></p>
              <p class="text-xs font-normal text-gray-500">Never synced</p>
            </div>

            <svg
              class="ml-auto -mr-0.5 h-4 w-4 text-gray-500 group-hover:text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  </aside>
</template>
