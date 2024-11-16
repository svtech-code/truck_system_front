import { useLoaderData } from "react-router-dom";
import VehicleType_main from "../components/vehicleType/VehicleType_main";
import GetError from "../components/GetError";

const VehicleType = () => {
  const { response, error } = useLoaderData();

  return (
    <VehicleTypeProvider response={response || []}>
      {!error ? <VehicleType_main /> : <GetError getError={error?.message} />}
    </VehicleTypeProvider>
  );
};

export default VehicleType;
