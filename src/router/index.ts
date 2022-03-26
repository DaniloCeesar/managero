import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home/HomeView.vue';
import TasksView from '@/views/Home/TasksView.vue';
import BoardView from '@/views/Home/BoardView.vue';
import UsersView from '@/views/Home/UsersView.vue';
import AttachmentsView from '@/views/Home/AttachmentsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          component: TasksView,
        },
        {
          path: 'boards',
          component: BoardView,
        },
        {
          path: 'users',
          component: UsersView,
        },
        {
          path: 'attachments',
          component: AttachmentsView,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
