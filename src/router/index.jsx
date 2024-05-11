import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import LayoutPublic from "../layouts/LayoutPublic";
import LayoutPrivate from "../layouts/LayoutPrivate";
import NotFound from "../pages/NotFound";
import { RoutesObjects } from "./RoutesObjects";

export const router = createBrowserRouter([
  {
    path: "/index",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
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
