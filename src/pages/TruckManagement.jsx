import TruckManagement_header from "../components/truckManagement/TruckManagement_header";
import { TruckManagementProvider } from "../contexts/TruckManagementProvider";

const TruckManagement = () => {
  // se agrega el header y la tabla
  return (
    <section className="bg-red-200 relative flex-1 rounded-2xl p-5">
      <TruckManagementProvider>
        <TruckManagement_header />
      </TruckManagementProvider>
    </section>
  );
};

export default TruckManagement;
