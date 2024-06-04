import { useLoaderData } from "react-router-dom";
import VehicleModel_main from "../components/vehicleModel/VehicleModel_main";
import GetError from "../components/GetError";

const VehicleModel = () => {
  const { response, error } = useLoaderData();

  return (
    <>
      {!error ? (
        <VehicleModel_main vehicleModel_data={response || []} />
      ) : (
        <GetError getError={error?.message} />
      )}
    </>
  );
};

export default VehicleModel;
