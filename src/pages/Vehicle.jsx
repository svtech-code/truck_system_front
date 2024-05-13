import { useLoaderData } from "react-router-dom";
import { VehiculoProvider } from "../contexts/VehicleProvider";
import Vehicle_main from "../components/vehicle/Vehicle_main";

const Vehicle = () => {
  const { response } = useLoaderData();

  return (
    <VehiculoProvider response={response}>
      <Vehicle_main />
    </VehiculoProvider>
  );
};

export default Vehicle;
