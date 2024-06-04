import { useDisclosure } from "@nextui-org/react";
import { useCallback, useState } from "react";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { IoLogoModelS } from "react-icons/io";
// import ModalNewData from "../../templates/ModalNewData";
import DataTableComponent from "../DataTable_Component";
import Structure_Component from "../structure/Structure_Component";

const VehicleModel_main = ({ vehicleModel_data }) => {
  // estados generales del componente
  const [stateComponent, setStateComponent] = useState({
    data: vehicleModel_data,
    edit: false,
    idEdit: null,
    descriptionEdit: null,
    error: null,
  });

  // constante con los string utilizados como parámetros
  const varString = {
    title: "Modelos de vehículos",
    titleModal: "Modelo de Vehículo",
    route: "modelos",
    propertyId: "cod_modelo",
    propertyName: "desc_modelo",
    cards: [
      {
        titleCard: "Modelos de vehículos",
        iconCard: <IoLogoModelS size={35} />,
        countCard: stateComponent?.data?.length,
      },
    ],
  };

  // actualizador de los estados del componente
  const updateStateComponent = useCallback((newState) => {
    setStateComponent((prev) => ({ ...prev, ...newState }));
  }, []);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* cabecera del mantenedor */}
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

      {/* modal del mantenedor */}
      {/* <ModalNewData
        stateComponent={stateComponent}
        updateStateComponent={updateStateComponent}
        title={varString.titleModal}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={varString.route}
        propertyId={varString.propertyId}
        propertyName={varString.propertyName}
      /> */}

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={stateComponent.data} // datos de la tabla
        structureData={Structure_Component({
          data: stateComponent.data, // Array con los datos del mantenedor
          titleColum: varString.title, // titulo de la columna
          onOpen, // función para abrir modal
          route: varString.route, // ruta para trabajar peticions axios
          propertyId: varString.propertyId, // propiedad del id
          propertyName: varString.propertyName, // propiedad de la descripción
          updateStateComponent, // actualizador del objeto estados del componente
        })}
        onOpen={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleModel_main;
