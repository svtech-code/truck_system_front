import { useLoaderData } from "react-router-dom";
import VehicleBrand_main from "../components/vehicleBrand/VehicleBrand_main";

const VehicleBrand = () => {
  const { response } = useLoaderData();

  return <VehicleBrand_main vehicleBrand_data={response} />;
};

export default VehicleBrand;
