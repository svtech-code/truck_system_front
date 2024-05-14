import { useLoaderData } from "react-router-dom";
import VehicleType_main from "../components/vehicleType/VehicleType_main";
import GetError from "../components/GetError";

const VehicleType = () => {
  const { response, error } = useLoaderData();

  return (
    <>
      {!error ? (
        <VehicleType_main vehicleType_data={response} />
      ) : (
        <GetError getError={error} />
      )}
    </>
  );
};

export default VehicleType;
