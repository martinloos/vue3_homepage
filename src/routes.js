import Index from '@/pages/index.vue';
import Projects from '@/pages/projects.vue';
import About from '@/pages/about.vue';
import Contact from '@/pages/contact.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
