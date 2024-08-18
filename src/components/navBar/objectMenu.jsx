import {
  FaClipboardList,
  FaTruck,
  FaTruckPickup,
  FaUser,
  FaUsersCog,
  FaUserTie,
} from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { MdModelTraining } from "react-icons/md";

// lista de menú para movile
export const navLinkMenuMovile = [
  { to: "/home", title: "Home" },
  { to: "/vehicle", title: "Registro vehículos" },
  { to: "/driver", title: "Gestión chofer" },
  { to: "/loadingorder", title: "Orden carga" },
  { to: "/taxpayer", title: "Contribuyente" },
  { to: "/userType", title: "Tipos usuario" },
  { to: "/vehicletype", title: "Tipos vehículo" },
  { to: "/vehiclebrand", title: "Marcas vehículo" },
  { to: "/vehiclemodel", title: "Modelos vehículo" },
  { to: "/vehiclestate", title: "Estados vehículo" },
  { to: "/report", title: "Reporte" },
];

// lista de sub menú para desplegabless
export const navLinkSubMenuDesktop = [
  {
    label: "Gestión",
    items: [
      {
        key: "vehicle",
        icon: <FaTruck />,
        label: "Registro vehículos",
        path: "/vehicle",
      },
      {
        key: "driver",
        icon: <FaUser />,
        label: "Gestión chofer",
        path: "/driver",
      },
      {
        key: "loadingorder",
        icon: <FaClipboardList />,
        label: "Orden carga",
        path: "/loadingorder",
      },
    ],
  },
  {
    label: "Mantenimiento",
    items: [
      {
        key: "taxpayer",
        icon: <FaUserTie />,
        label: "Contribuyente",
        path: "/taxpayer",
      },
      {
        key: "userType",
        icon: <FaUsersCog />,
        label: "Tipos usuario",
        path: "/usertype",
      },
      {
        key: "vehicletype",
        icon: <FaTruckPickup />,
        label: "Tipos vehículo",
        path: "/vehicletype",
      },
      {
        key: "vehiclebrand",
        icon: <FaClipboardList />,
        label: "Marcas vehículo",
        path: "/vehiclebrand",
      },
      {
        key: "vehiclemodel",
        icon: <MdModelTraining />,
        label: "Modelos vehículo",
        path: "/vehiclemodel",
      },
      {
        key: "vehiclestate",
        icon: <HiStatusOnline />,
        label: "Estados vehículo",
        path: "/vehiclestate",
      },
    ],
  },
];
