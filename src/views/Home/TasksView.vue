<script setup lang="ts">
import { reactive } from 'vue';

import TaskRow, { type TaskRowProps } from '@/components/Task/TaskRow.vue';

const tasks = reactive<Array<TaskRowProps>>([
  {
    id: 1,
    name: 'New task #1',
    checked: false,
    status: 'in-progress',
    icon: 'cloud',
    background: 'bg-blue-100',
    foreground: 'text-blue-800',
    assignes: ['/avatar.svg'],
  },
  {
    id: 2,
    name: 'New task #2',
    checked: false,
    status: 'in-progress',
    icon: 'star',
    background: 'bg-blue-100',
    foreground: 'text-blue-800',
    assignes: ['/avatar.svg'],
  },
  {
    id: 3,
    name: 'New task #3',
    checked: true,
    status: 'done',
    icon: 'server',
    background: 'bg-orange-100',
    foreground: 'text-orange-800',
    assignes: ['/avatar.svg'],
  },
  {
    id: 4,
    name: 'New task #4',
    checked: false,
    status: 'in-progress',
    icon: 'cube',
    background: 'bg-purple-100',
    foreground: 'text-purple-800',
    assignes: ['/avatar.svg'],
  },
]);
</script>

<template>
  <div class="px-4 pb-2">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Tasks
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Status
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Assignees
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Folders
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <TaskRow
          v-for="task in tasks"
          :key="task.id"
          :name="task.name"
          :checked="task.checked"
          :status="task.status"
          :assignes="task.assignes"
          :icon="task.icon"
          :background="task.background"
          :foreground="task.foreground"
        />
      </tbody>
    </table>
  </div>
</template>
