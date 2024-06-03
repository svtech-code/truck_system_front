import { useCallback, useState } from "react";
import HeaderCardComponent from "../HeaderCard_Component";
import { useDisclosure } from "@nextui-org/react";
import HeaderComponent from "../Header_Component";
import { FaTruckArrowRight } from "react-icons/fa6";
import ModalNewData from "../../templates/ModalNewData";
import DataTableComponent from "../DataTable_Component";
import Structure_Component from "../structure/Structure_Component";

const VehicleState_main = ({vehicleState_data}) => { 
 // estados generales del componente
  const [stateComponent, setStateComponent] = useState({
    data: vehicleState_data,
    edit: false,
    idEdit: null,
    descriptionEdit: null,
    error: null,
  });

  // constante con los string utilizados como parámetros
  const varString = {
    title: "Estados vehiculo",
    titleModal: "Estado Vehículo",
    route: "estado_vehiculos",
    propertyId: "cod_estado_vehiculo",
    propertyName: "desc_estado_vehiculo",
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
                <HeaderCardComponent 
                    title={varString.title}
                    icon={<FaTruckArrowRight size={35} />}
                    count={stateComponent?.data?.length}
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
                onOpen={onOpen}
                downloadData={eventClickDownloadData}
            />
        </>
    )
 }

 export default VehicleState_main;