import { useContext } from "react";
import GeoreferenceContext from "../contexts/GeoreferenceProvider";

const useGeoreference = () => {
  return useContext(GeoreferenceContext);
};

export default useGeoreference;
