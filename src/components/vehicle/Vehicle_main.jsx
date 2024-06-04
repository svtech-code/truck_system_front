import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import useVehicle from "../../hooks/useVehicle";
import { Vehicle_structure } from "./Vehicle_structure";
import Vehicle_subStructure from "./Vehicle_subStructure";
import HeaderCardComponent from "../HeaderCard_Component";
import { GiMechanicGarage, GiTruck } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
// import ModalVehicle from "../../templates/ModalVehicle";
import { useDisclosure } from "@nextui-org/react";
import ModalBase from "../../templates/ModalBase";
import useSubmitVehicle from "../../hooks/useSubmitVehicle";
import initialValues_vehicle from "../../utils/initialValues/vehicleValues";
import vehicleValidation from "../../validations/vehicleValidation";
import Vehicle_form from "./Vehicle_form";

const Vehicle_main = () => {
  const { mainVehicleData, numberOperationalVehicles, numberExpiredDocument } =
    useVehicle();

  // constante con los string utilizados como parámetros
  const varString = {
    title: "Registro de vehículos",
    titleModal: "Registro de vehículo",
    route: "vehiculos",
    propertyId: "cod_vehiculo",
    propertyName: "desc_modelo", // agregar array con propertis name
    cards: [
      {
        titleCard: "Operativos",
        iconCard: <GiTruck size={35} />,
        countCard: numberOperationalVehicles,
      },
      {
        titleCard: "Mantenimiento",
        iconCard: <GiMechanicGarage size={35} />,
        countCard: numberExpiredDocument,
      },
      {
        titleCard: "Vencimiento",
        iconCard: <HiClipboardDocumentList size={35} />,
        countCard: numberExpiredDocument,
      },
    ],
  };

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* header del mantenedor */}
      <HeaderComponent maintainer={varString.title}>
        {/* tarjeta del mantenedor */}
        {varString.cards.map((card, index) => (
          <HeaderCardComponent
            key={index}
            title={card.titleCard}
            icon={card.iconCard}
            count={card.countCard}
          />
        ))}
      </HeaderComponent>

      {/* modal generico */}
      <ModalBase
        title={varString.titleModal}
        size={"2xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        useSubmit_generic={useSubmitVehicle}
        initialValues_generic={initialValues_vehicle}
        validationSchema_generic={vehicleValidation}
        Form_generic={(props) => <Vehicle_form {...props} />}
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
