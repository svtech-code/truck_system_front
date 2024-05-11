import Home from "../pages/Home";
import Truck from "../pages/Truck";
import Setting from "../pages/Setting";
import LoadingOrder from "../pages/LoadingOrder";
import Message from "../pages/Message";
import Profile from "../pages/Profile";
import Driver from "../pages/Driver";
import UserType from "../pages/UserType";
import VehicleBrand from "../pages/VehicleBrand";
import VehicleType from "../pages/VehicleType";
import apiGet from "../api/apiGet";

const getData = async ({ endPoint }) => {
  try {
    const getUserType = await apiGet({ route: endPoint });
    const response = await getUserType?.data;

    return { response };
  } catch (error) {
    return { error };
  }
};

export const RoutesObjects = [
  { path: "/home", element: <Home /> },
  {
    path: "/truck",
    element: <Truck />,
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
  { path: "/report", element: <LoadingOrder /> },
  { path: "/profile", element: <Profile /> },
  { path: "/message", element: <Message /> },
  { path: "/setting", element: <Setting /> },
];
