import TruckHeader from "../components/truckManagement/TruckHeader";
import TruckDataTable from "../components/truckManagement/TuckDataTable";
import { TruckProvider } from "../contexts/TruckProvider";

const Truck = () => {
  return (
    <TruckProvider>
      <TruckHeader />
      <TruckDataTable />
    </TruckProvider>
  );
};

export default Truck;
