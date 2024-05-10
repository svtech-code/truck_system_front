import Home from "../pages/Home";
import Truck from "../pages/Truck";
import Setting from "../pages/Setting";
import LoadingOrder from "../pages/LoadingOrder";
import Message from "../pages/Message";
import Profile from "../pages/Profile";
import Driver from "../pages/Driver";
import UserType from "../pages/UserType";
import VehicleStatus from "../pages/VehicleStatus";
import VehicleBrand from "../pages/VehicleBrand";
import VehicleType from "../pages/VehicleType";

export const RoutesObjects = [
  { path: "/home", element: <Home /> },
  { path: "/truck", element: <Truck /> },
  { path: "/driver", element: <Driver /> },
  { path: "/loadingorder", element: <LoadingOrder /> },
  { path: "/report", element: <LoadingOrder /> },
  { path: "/profile", element: <Profile /> },
  { path: "/message", element: <Message /> },
  { path: "/setting", element: <Setting /> },
  { path: "/vehicletype", element: <VehicleType /> },
  { path: "/usertype", element: <UserType /> },
  // { path: "/vehiclestatus", element: <VehicleStatus /> },
  { path: "/vehiclebrand", element: <VehicleBrand /> },
];
