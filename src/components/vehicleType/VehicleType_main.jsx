import { FaCar } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { useCallback, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";
import Structure_Component from "../structure/Structure_Component";

const VehicleType_main = ({ vehicleType_data }) => {
  // estados generales del componente
  const [stateComponent, setStateComponent] = useState({
    data: vehicleType_data,
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

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* cabecera del mantenedor */}
      <HeaderComponent maintainer={"Tipos de vehículos"}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={"Tipos de vehículos"}
          icon={<FaCar size={35} />}
          count={stateComponent.data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        stateComponent={stateComponent}
        updateStateComponent={updateStateComponent}
        title={"Tipo de Vehículo"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={"tipo_vehiculos"}
        propertyId={"cod_tipo_vehiculo"}
        propertyName={"desc_tipo_vehiculo"}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={stateComponent.data} // datos de la tabla
        structureData={Structure_Component({
          data: stateComponent.data, // Array con los datos del mantenedor
          titleColum: "Tipos de vehículos", // titulo de la columna
          onOpen, // función para abrir modal
          route: "tipo_vehiculos", // ruta para trabajar peticions axios
          propertyId: "cod_tipo_vehiculo", // propiedad del id
          propertyName: "desc_tipo_vehiculo", // propiedad de la descripción
          updateStateComponent, // actualizador del objeto estados del componente
        })}
        openModal={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleType_main;
