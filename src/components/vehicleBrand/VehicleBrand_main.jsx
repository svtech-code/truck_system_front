import { FaClipboardList } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleBrand_structure } from "./VehicleBrand_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";

const VehicleBrand_main = ({ vehicleBrand_data }) => {
  const [data, setData] = useState(vehicleBrand_data);

  const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={"Marcas de vehículo"}>
        <HeaderCardComponent
          title={"Marcas de vehículo"}
          icon={<FaClipboardList size={35} />}
          count={data.length}
        />
      </HeaderComponent>
      <DataTableComponent
        data={data}
        structureData={VehicleBrand_structure()}
        newData={eventClickNewData}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleBrand_main;
