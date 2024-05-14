import { useLoaderData } from "react-router-dom";
import VehicleBrand_main from "../components/vehicleBrand/VehicleBrand_main";
import GetError from "../components/GetError";

const VehicleBrand = () => {
  const { response, error } = useLoaderData();

  return (
    <>
      {!error ? (
        <VehicleBrand_main vehicleBrand_data={response || []} />
      ) : (
        <GetError getError={error} />
      )}
    </>
  );
};

export default VehicleBrand;
