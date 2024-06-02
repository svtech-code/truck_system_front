import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import useVehicle from "../../hooks/useVehicle";
import { Vehicle_structure } from "./Vehicle_structure";
import Vehicle_subStructure from "./Vehicle_subStructure";
import HeaderCardComponent from "../HeaderCard_Component";
import { GiMechanicGarage, GiTruck } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import ModalVehicle from "../../templates/ModalVehicle";
import { useDisclosure } from "@nextui-org/react";

const Vehicle_main = () => {
  const { mainVehicleData, numberOperationalVehicles, numberExpiredDocument } =
    useVehicle();

  // constante con los string utilizados como parámetros
  const varString = {
    title: "Registro de vehículos",
    titleModal: "Tipo de usuario",
    route: "tipo_usuarios",
    propertyId: "cod_tipo_usuario",
    propertyName: "desc_tipo_usuario",
  };

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* header del mantenedor */}
      <HeaderComponent maintainer={varString.title}>
        <HeaderCardComponent
          title={"Vehículos operativos"}
          icon={<GiTruck size={35} />}
          count={numberOperationalVehicles}
        />
        <HeaderCardComponent
          title={"En mantenimiento"}
          icon={<GiMechanicGarage size={35} />}
          count={numberExpiredDocument}
        />
        <HeaderCardComponent
          title={"Documentos vencidos"}
          icon={<HiClipboardDocumentList size={35} />}
          count={numberExpiredDocument}
        />
      </HeaderComponent>

      {/* espacio para ingresar el modal */}
      <ModalVehicle
        title={varString.titleModal}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={mainVehicleData}
        onOpen={onOpen}
        structureData={Vehicle_structure()}
        subStructureData={Vehicle_subStructure}
        newData={eventClickNewData}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Vehicle_main;
