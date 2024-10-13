import { useContext } from "react";
import DriverContext from "../contexts/DriverProvider";

const useDriver = () => {
  return useContext(DriverContext);
};

export default useDriver;
