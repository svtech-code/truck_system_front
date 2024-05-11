import { FaClipboardList } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleBrand_structure } from "./VehicleBrand_structure";

const VehicleBrand_main = ({ vehicleBrand_data }) => {
  return (
    <>
      <HeaderComponent
        maintainer={"Marcas de vehículo"}
        iconCard={<FaClipboardList size={35} />}
      />
      <DataTableComponent
        data={vehicleBrand_data}
        structureData={VehicleBrand_structure()}
      />
    </>
  );
};

export default VehicleBrand_main;
