import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layouts/LayoutPublic";
import LayoutPrivate from "../layouts/LayoutPrivate";

import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import TruckManagement from "../pages/TruckManagement";
import Setting from "../pages/Setting";

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
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/truckmanagement",
        element: <TruckManagement />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);
