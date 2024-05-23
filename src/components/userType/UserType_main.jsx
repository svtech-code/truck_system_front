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
      <HeaderComponent maintainer={"Tipos de usuarios"}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={"Tipos de usuarios"}
          icon={<FaUserTag size={35} />}
          count={stateComponent.data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        stateComponent={stateComponent}
        updateStateComponent={updateStateComponent}
        title={"Tipo de usuario"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={"tipo_usuarios"}
        propertyId={"cod_tipo_usuario"}
        propertyName={"desc_tipo_usuario"}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={stateComponent.data} // datos de la tabla
        structureData={Structure_Component({
          data: stateComponent.data, // Array con los datos del mantenedor
          titleColum: "Tipos de usuarios", // titulo de la columna
          onOpen, // función para abrir modal
          route: "tipo_usuarios", // ruta para trabajar peticions axios
          propertyId: "cod_tipo_usuario", // propiedad del id
          propertyName: "desc_tipo_usuario", // propiedad de la descripción
          updateStateComponent, // actualizador del objeto estados del componente
        })}
        openModal={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default UserType_main;
