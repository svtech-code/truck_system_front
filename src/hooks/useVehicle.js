import { useContext } from "react";
import VehiculeContext from "../contexts/VehicleProvider";

const useVehicle = () => {
  return useContext(VehiculeContext);
};

export default useVehicle;
