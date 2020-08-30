import { navigateTo, loadRoute } from './lib/router-functions.js';
import routerSettings from './lib/router-settings.js';
import Routes from './lib/router-routes.js';

export default class Router {
  constructor(routes) {
    Routes.addRoutes(routes);
    this.initRouter();
  }

  initRouter() {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM Loaded, starting Router');

      loadRoute();

      document.body.addEventListener('click', (e) => {
        if (e.target.matches(`[data-${routerSettings.dataAttributeName}]`)) {
          e.preventDefault();
          navigateTo(e.target.href);
        }
      });
    });

    window.addEventListener('popstate', loadRoute);
  }
}
