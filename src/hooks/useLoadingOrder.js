import { useContext } from "react";
import LoadingOrderContext from "../contexts/LoadingOrderProvider";

const useLoadingOrder = () => {
  return useContext(LoadingOrderContext);
};

export default useLoadingOrder;
