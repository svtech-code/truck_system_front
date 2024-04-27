import TruckManagement_header from "../components/truckManagement/TruckManagement_header";
import TruckManagement_dataTable from "../components/truckManagement/TuckManagement_dataTable";
import { TruckManagementProvider } from "../contexts/TruckManagementProvider";

const TruckManagement = () => {
  return (
    <TruckManagementProvider>
      <TruckManagement_header />
      <TruckManagement_dataTable />
    </TruckManagementProvider>
  );
};

export default TruckManagement;
