import { useContext } from "react";
import VehicleTypeContext from "../contexts/VehicleTypeProvider";

const useVehicleType = () => {
  return useContext(VehicleTypeContext);
};

export default useVehicleType;
