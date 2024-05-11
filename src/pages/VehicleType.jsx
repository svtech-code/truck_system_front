import { useLoaderData } from "react-router-dom";
import VehicleType_main from "../components/vehicleType/VehicleType_main";

const VehicleType = () => {
  const { response } = useLoaderData();

  return <VehicleType_main vehicleType_data={response} />;
};

export default VehicleType;
