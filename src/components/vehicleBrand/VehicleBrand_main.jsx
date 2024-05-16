import { FaClipboardList } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleBrand_structure } from "./VehicleBrand_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";

const VehicleBrand_main = ({ vehicleBrand_data }) => {
  // estado para almacenar la información del mantenedor
  const [data, setData] = useState(vehicleBrand_data);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* cabecera del mantenedor */}
      <HeaderComponent maintainer={"Marcas de vehículo"}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={"Marcas de vehículo"}
          icon={<FaClipboardList size={35} />}
          count={data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        setData={setData}
        title={"Marca de vehículo"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={"marcas"}
        propertyName={"desc_marca"}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={data}
        structureData={VehicleBrand_structure()}
        newData={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleBrand_main;
