import { useDisclosure } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { IoLogoModelS } from "react-icons/io";
import DataTableComponent from "../DataTable_Component";
import VehicleModel_structure from "./VehicleModel_structure";
import ModalBase from "../../templates/ModalBase";
import usePostModel from "../../hooks/usePostModel";
import initialValues_model from "../../utils/initialValues/modelValues";
import modelValidation from "../../validations/modelValidation";
import VehicleModel_form from "./VehicleModel_form";

const VehicleModel_main = ({ vehicleModel_data }) => {
  // estados generales del componente
  const [stateComponent, setStateComponent] = useState({
    data: vehicleModel_data,
    edit: false,
    idEdit: null,
    descriptionEdit: null,
    error: null,
  });

  // actualizador de los estados del componente
  const updateStateComponent = useCallback((newState) => {
    setStateComponent((prev) => ({ ...prev, ...newState }));
  }, []);

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
      <ModalBase
        propertyId={varString.propertyId}
        stateComponent={stateComponent}
        updateStateComponent={updateStateComponent}
        title={varString.titleModal}
        size={"xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        useSubmit_generic={usePostModel({
          data: stateComponent.data,
          updateStateComponent,
        })}
        initialValues_generic={initialValues_model}
        validationSchema_generic={modelValidation}
        Form_generic={(props) => <VehicleModel_form {...props} />}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={stateComponent.data} // datos de la tabla
        onOpen={onOpen} // función para abrir el modal
        structureData={VehicleModel_structure({
          data: stateComponent.data, // Array con los datos del mantenedorl
          onOpen, // función para abrir el modal
          route: varString.route, // ruta para trabajar con las peticiones axios
          propertyId: varString.propertyId, // propiedad del id
          propertyName: varString.propertyName, // propiedad de la descripción
          updateStateComponent, // actualizador del objeto state del componente
        })}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleModel_main;
