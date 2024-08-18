import { useContext } from "react";
import TaxpayerContext from "../contexts/TaxpayerProvider";

const useTaxpayer = () => {
  return useContext(TaxpayerContext);
};

export default useTaxpayer;
