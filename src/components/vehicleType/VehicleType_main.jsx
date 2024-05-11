import { FaCar } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { vehicleType_data } from "../../utils/datatable_data";
import { VehicleType_structure } from "./VehicleType_structure";

const VehicleType_main = ({ vehicleType_data }) => {
  return (
    <>
      <HeaderComponent
        maintainer={"Tipos de vehículos"}
        iconCard={<FaCar size={35} />}
      />
      <DataTableComponent
        data={vehicleType_data}
        structureData={VehicleType_structure()}
      />
    </>
  );
};

export default VehicleType_main;
