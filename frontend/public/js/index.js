import Router from './router/router.js';

// The Views
import HomeView from './views/home/home.view.js';
import BlogView from './views/blog/blog.view.js';
import SettingsView from './views/settings/settings.view.js';
import NotFoundView from './views/notFound/notFound.view.js';
import TestView from './views/test/test.view.js';
import BlogPostView from './views/blogPost/blogPost.view.js';

// The Routes
const routes = [
  { path: '/', view: HomeView },
  { path: '/blog', view: BlogView },
  { path: '/blog/:slug', view: BlogPostView },
  { path: '/settings', view: SettingsView },
  { path: '/404', view: NotFoundView },
];

const router = new Router(routes);
