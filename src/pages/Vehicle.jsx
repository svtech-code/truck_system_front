import { useLoaderData } from "react-router-dom";
import { VehiculoProvider } from "../contexts/VehicleProvider";
import Vehicle_main from "../components/vehicle/Vehicle_main";
import GetError from "../components/GetError";

const Vehicle = () => {
  const { response, error } = useLoaderData();

  return (
    <VehiculoProvider response={response || []}>
      {!error ? <Vehicle_main /> : <GetError getError={error} />}
    </VehiculoProvider>
  );
};

export default Vehicle;
