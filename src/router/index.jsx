import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layouts/LayoutPublic";
import LayoutPrivate from "../layouts/LayoutPrivate";

import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import TruckRegistration from "../pages/TruckRegistration";

export const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/truck",
    element: <LayoutPrivate />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/truck/home",
        element: <Home />,
      },
      {
        path: "/truck/truckregistration",
        element: <TruckRegistration />,
      },
    ],
  },
]);
