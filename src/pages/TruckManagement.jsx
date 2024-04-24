import TruckManagement_header from "../components/truckManagement/TruckManagement_header";
import TruckManagement_table from "../components/truckManagement/TruckManagement_table";
import { TruckManagementProvider } from "../contexts/TruckManagementProvider";

const TruckManagement = () => {
  // se agrega el header y la tabla
  return (
    <section className="bg-white relative flex flex-col flex-1 rounded-2xl p-5">
      <TruckManagementProvider>
        <TruckManagement_header />
        <TruckManagement_table />
      </TruckManagementProvider>
    </section>
  );
};

export default TruckManagement;
