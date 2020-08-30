class Routes {
  routes = [];
  currentRoute;

  constructor() {}

  addRoutes(routes) {
    routes.forEach((route) => this.routes.push(this.addRoute(route)));
  }

  addRoute(route) {
    return route;
  }

  setCurrentRoute(cr) {
    this.currentRoute = cr;
  }
}

const routes = new Routes();

export default routes;
