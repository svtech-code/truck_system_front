import Home from "../pages/Home";
import Setting from "../pages/Setting";
import LoadingOrder from "../pages/LoadingOrder";
import Message from "../pages/Message";
import Profile from "../pages/Profile";
import Driver from "../pages/Driver";
import UserType from "../pages/UserType";
import VehicleBrand from "../pages/VehicleBrand";
import VehicleType from "../pages/VehicleType";
import Vehicle from "../pages/Vehicle";
import { getData } from "../api/apiGet";
import VehicleModel from "../pages/VehicleModel";
import VehicleState from "../pages/VehicleState";
import Report from "../pages/Report";
import Taxpayer from "../pages/Taxpayer";
import Georeference from "../pages/Georeference";

export const RoutesObjects = [
  { path: "/home", element: <Home /> },
  {
    path: "/vehicle",
    element: <Vehicle />,
    loader: () => getData({ endPoint: "vehiculos" }),
  },
  {
    path: "/driver",
    element: <Driver />,
    loader: () => getData({ endPoint: "choferes" }),
  },
  {
    path: "/loadingorder",
    element: <LoadingOrder />,
    loader: () => getData({ endPoint: "orden_carga" }),
  },
  {
    path: "/taxpayer",
    element: <Taxpayer />,
    loader: () => getData({ endPoint: "contribuyentes" }),
  },
  {
    path: "/georeference",
    element: <Georeference />,
    loader: () => getData({ endPoint: "georeferencias" }),
  },
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
    element: <VehicleState />,
    loader: () => getData({ endPoint: "estado_vehiculos" }),
  },
  {
    path: "/vehiclemodel",
    element: <VehicleModel />,
    loader: () => getData({ endPoint: "modelos" }),
  },
  { path: "/report", element: <Report /> },
  { path: "/profile", element: <Profile /> },
  { path: "/message", element: <Message /> },
  { path: "/setting", element: <Setting /> },
];
