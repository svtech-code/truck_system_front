import { useLoaderData } from "react-router-dom";
import TruckHeader from "../components/truckManagement/TruckHeader";
import TruckDataTable from "../components/truckManagement/TuckDataTable";
import { TruckProvider } from "../contexts/TruckProvider";

const Truck = () => {
  const { response } = useLoaderData();

  return (
    <TruckProvider>
      <TruckHeader />
      <TruckDataTable />
    </TruckProvider>
  );
};

export default Truck;
