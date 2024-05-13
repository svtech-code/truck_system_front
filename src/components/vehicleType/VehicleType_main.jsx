import { FaCar } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleType_structure } from "./VehicleType_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";

const VehicleType_main = ({ vehicleType_data }) => {
  const [data, setData] = useState(vehicleType_data);

  const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={"Tipos de vehículos"}>
        <HeaderCardComponent
          title={"Tipos de vehículos"}
          icon={<FaCar size={35} />}
          count={data.length}
        />
      </HeaderComponent>
      <DataTableComponent
        data={data}
        structureData={VehicleType_structure()}
        newData={eventClickNewData}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleType_main;
