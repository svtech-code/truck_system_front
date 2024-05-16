import { FaCar } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleType_structure } from "./VehicleType_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";

const VehicleType_main = ({ vehicleType_data }) => {
  // estado para almacenar la información del mantenedor
  const [data, setData] = useState(vehicleType_data);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* cabecera del mantenedor */}
      <HeaderComponent maintainer={"Tipos de vehículos"}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={"Tipos de vehículos"}
          icon={<FaCar size={35} />}
          count={data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        setData={setData}
        title={"Tipo de Vehículo"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={"tipo_vehiculos"}
        propertyName={"desc_tipo_vehiculo"}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={data}
        structureData={VehicleType_structure()}
        newData={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleType_main;
