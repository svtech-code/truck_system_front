import Home from "../pages/Home";
import Setting from "../pages/Setting";
import LoadingOrder from "../pages/LoadingOrder";
import Message from "../pages/Message";
import Profile from "../pages/Profile";
import Driver from "../pages/Driver";
import UserType from "../pages/UserType";
import VehicleBrand from "../pages/VehicleBrand";
import StateVehicle from "../pages/StateVehicle";
import VehicleType from "../pages/VehicleType";
import Vehicle from "../pages/Vehicle";
import { getData } from "../api/apiGet";

export const RoutesObjects = [
  { path: "/home", element: <Home /> },
  {
    path: "/vehicle",
    element: <Vehicle />,
    loader: () => getData({ endPoint: "vehiculos" }),
  },
  { path: "/driver", element: <Driver /> },
  { path: "/loadingorder", element: <LoadingOrder /> },
  {
    path: "/usertype",
    element: <UserType />,
    loader: () => getData({ endPoint: "tipo_usuarios" }),
  },
  {
    path: "/vehicletype",
    element: <VehicleType />,
    loader: () => getData({ endPoint: "tipo_vehiculos" }),
  },
  {
    path: "/vehiclebrand",
    element: <VehicleBrand />,
    loader: () => getData({ endPoint: "marcas" }),
  },
  {
    path: "/vehiclestate",
    element: <StateVehicle />,
    loader: () => getData({ endPoint: "estado_vehiculos" }),
  },
  { path: "/report", element: <LoadingOrder /> },
  { path: "/profile", element: <Profile /> },
  { path: "/message", element: <Message /> },
  { path: "/setting", element: <Setting /> },
];
