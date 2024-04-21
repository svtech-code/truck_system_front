import { useContext } from "react";
import TruckManagementContext from "../contexts/TruckManagementProvider";

const useTruckManagement = () => {
  return useContext(TruckManagementContext);
};

export default useTruckManagement;
