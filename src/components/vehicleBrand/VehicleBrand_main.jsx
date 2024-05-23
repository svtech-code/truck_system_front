import { FaClipboardList } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { useCallback, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";
import Structure_Component from "../structure/Structure_Component";

const VehicleBrand_main = ({ vehicleBrand_data }) => {
  // estados generales del componente
  const [stateComponent, setStateComponent] = useState({
    data: vehicleBrand_data,
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
      <HeaderComponent maintainer={"Marcas de vehículos"}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={"Marcas de vehículos"}
          icon={<FaClipboardList size={35} />}
          count={stateComponent.data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        stateComponent={stateComponent}
        updateStateComponent={updateStateComponent}
        title={"Marca de vehículo"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={"marcas"}
        propertyId={"cod_marca"}
        propertyName={"desc_marca"}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={stateComponent.data} // datos de la tabla
        structureData={Structure_Component({
          data: stateComponent.data, // Array con los datos del mantenedor
          titleColum: "Marcas de vehículos", // titulo de la columna de la tabla
          onOpen, // función para abrir modal
          route: "marcas", // ruta para trabajar peticions axios
          propertyId: "cod_marca", // propiedad del id
          propertyName: "desc_marca", // propiedad de la descripción
          updateStateComponent, // actualizador del objeto estados del componente
        })}
        openModal={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleBrand_main;
