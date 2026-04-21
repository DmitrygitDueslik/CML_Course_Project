import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { CarDetails } from "./pages/CarDetails";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import { Configurator } from "./pages/Configurator";
import { TestDrive } from "./pages/TestDrive";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "car/:id", Component: CarDetails },
      { path: "cart", Component: Cart },
      { path: "favorites", Component: Favorites },
      { path: "configurator", Component: Configurator },
      { path: "test-drive", Component: TestDrive },
      { path: "contacts", Component: Contacts },
      { path: "*", Component: NotFound },
    ],
  },
]);