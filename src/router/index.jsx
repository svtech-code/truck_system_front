import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import LayoutPublic from "../layouts/LayoutPublic";
import LayoutPrivate from "../layouts/LayoutPrivate";
import NotFound from "../pages/NotFound";
import { RoutesObjects } from "./RoutesObjects";
// import Test from "../pages/Test"; // eliminar, solo pruebas

export const router = createBrowserRouter([
  {
    path: "/index",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
        // element: <Test />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutPrivate />,
    errorElement: <NotFound />,
    children: RoutesObjects.map(({ path, element, loader }) => ({
      path,
      element,
      loader,
    })),
  },
]);
