import Routes from './router-routes.js';
import RS from './router-settings.js';

const getParams = (path, args) => {
  const values = args.slice(1);
  const keys = Array.from(path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  loadRoute();
};

export const loadRoute = async () => {
  // comment out if you want to allow same page loading after clicking a link
  if (Routes.currentRoute === location.pathname) {
    return console.log(`Path ${Routes.currentRoute} already loaded`);
  }

  // Filter Matching route
  const matchingRoute =
    Routes.routes.find((route) =>
      location.pathname.match(pathToRegex(route.path))
    ) ?? Routes.routes.find((route) => route.path === '/404');
  Routes.setCurrentRoute(matchingRoute.path);

  // Load the view
  const view = new matchingRoute.view(
    getParams(
      matchingRoute.path,
      location.pathname.match(pathToRegex(matchingRoute.path))
    )
  );

  // Clear Previous Style
  document.querySelectorAll('style').forEach((element) => {
    if (element.matches(`[${RS.styleDataAttribute}="true"]`)) {
      element.remove();
    }
  });

  // Add Custom CSS
  if (view.cssFile) {
    await view.addStyleSheet(
      `/${RS.assetFolder}/js/${RS.viewFolder}/${view.cssFile}`
    );
  }

  // Load Page
  document.querySelector(`#${RS.routerOutlet}`).innerHTML = view.htmlFile
    ? await view.loadHTMLFile(
        `/${RS.assetFolder}/js/${RS.viewFolder}/${view.htmlFile}`
      )
    : await view.getHtml();
};
