import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@id/header",
  app: () =>
    System.import("@id/header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@id/home-page",
  app: () =>
    System.import("@id/home-page"),
  activeWhen: (location) => location.pathname === "/" || location.pathname === "/home-page",
});

registerApplication({
  name: "@id/about-page",
  app: () =>
    System.import("@id/about-page"),
  activeWhen: (location) => location.pathname === "/about-page",
});

start({
  urlRerouteOnly: true,
});
