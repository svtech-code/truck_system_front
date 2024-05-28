import DataTableComponent from "../DataTable_Component";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { FaUserTag } from "react-icons/fa";
import { useCallback, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";
import Structure_Component from "../structure/Structure_Component";

const UserType_main = ({ userType_data }) => {
  // estados generales del componente
  const [stateComponent, setStateComponent] = useState({
    data: userType_data,
    edit: false,
    idEdit: null,
    descriptionEdit: null,
    error: null,
  });

  // variables string
  const varString = {
    title: "Tipos de usuarios",
    titleModal: "Tipo de usuario",
    route: "tipo_usuarios",
    propertyId: "cod_tipo_usuario",
    propertyName: "desc_tipo_usuario",
  };

  // actualizador de los estados del componente
  const updateStateComponent = useCallback((newState) => {
    setStateComponent((prev) => ({ ...prev, ...newState }));
  }, []);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // función momentanea para descargar información
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* cabecera del mantenedor */}
      <HeaderComponent maintainer={varString.title}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={varString.title}
          icon={<FaUserTag size={35} />}
          count={stateComponent.data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        stateComponent={stateComponent}
        updateStateComponent={updateStateComponent}
        title={varString.titleModal}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={varString.route}
        propertyId={varString.propertyId}
        propertyName={varString.propertyName}
      />

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
        openModal={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default UserType_main;
