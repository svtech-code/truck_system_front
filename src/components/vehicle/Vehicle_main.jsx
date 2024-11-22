import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import useVehicle from "../../hooks/useVehicle";
import { Vehicle_structure } from "./Vehicle_structure";
import Vehicle_subStructure from "./Vehicle_subStructure";
import HeaderCardComponent from "../HeaderCard_Component";
import { GiMechanicGarage, GiTruck } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import ModalBaseForm from "../../templates/ModalBaseForm";
import initialValues_vehicle from "../../utils/initialValues/vehicleValues";
import vehicleValidation from "../../validations/vehicleValidation";
import Vehicle_form from "./Vehicle_form";
import { useCallback, useEffect, useState } from "react";
import { getData } from "../../api/apiGet";
import useSubmitVehicle from "../../hooks/submit/useSubmitVehicle";

const varString = {
  title: "Registro de vehículos",
  titleModal: "Registro de vehículo",
  route: "vehiculos",
  propertyId: "cod_vehiculo",
  propertyName: "desc_modelo",
  cards: [
    {
      titleCard: "Operativos",
      iconCard: <GiTruck size={35} />,
      countCard: "numberOperationalVehicles",
    },
    {
      titleCard: "Mantenimiento",
      iconCard: <GiMechanicGarage size={35} />,
      countCard: "numberMaintanceVehicle",
    },
    {
      titleCard: "Vencimiento",
      iconCard: <HiClipboardDocumentList size={35} />,
      countCard: "numberExpiredDocument",
    },
  ],
};

const Vehicle_main = () => {
  const {
    data,
    loadDataState,
    drivers,
    numberOperationalVehicles,
    numberMaintanceVehicle,
    numberExpiredDocument,
    updateVehicleData,
  } = useVehicle();

  const counterCard = {
    numberOperationalVehicles,
    numberMaintanceVehicle,
    numberExpiredDocument,
  };

  useEffect(() => {
    const getDataVehicle = async () => {
      const [state, brand, model, type, driver, taxpayer] = await Promise.all([
        getData({ endPoint: "estado_vehiculos" }),
        getData({ endPoint: "marcas" }),
        getData({ endPoint: "modelos" }),
        getData({ endPoint: "tipo_vehiculos" }),
        getData({ endPoint: "choferes" }),
        getData({ endPoint: "contribuyentes/?es_transportista=true" }),
      ]);

      updateVehicleData({
        stateVehicle: state?.response,
        brandVehicle: brand?.response,
        modelVehicle: model?.response,
        typeVehicle: type?.response,
        drivers: driver?.response,
        taxpayers: taxpayer?.response,
      });
    };

    getDataVehicle();
  }, []);

  useEffect(() => {
    if (drivers.length > 0) {
      updateVehicleData({ loadDataState: false });
    }
  }, [drivers]);

  // estados para el manejo del modal
  const [open, setOpen] = useState(false);

  const handleModalClose = useCallback(() => {
    setOpen(false);

    // pensado para actualizar el contexto de los modelos, en caso de creación de un modelo nuevo, pero desde el formulario
    // probando con deshabilitarlo, probar si da error
    // getData({ endPoint: "modelos" }).then((response) =>
    //   updateVehicleData({ modelVehicle: response?.response })
    // );
  }, []);

  const eventClickDownloadData = () => alert("Descargar informacion");

  // estado unitario
  const [dataModel, setDataModel] = useState(null);

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
            count={counterCard[card.countCard]}
          />
        ))}
      </HeaderComponent>

      {/* modal generico */}
      <ModalBaseForm
        propertyId={varString.propertyId}
        stateComponent={useVehicle()}
        updateStateComponent={updateVehicleData}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => handleModalClose()}
        useSubmit_generic={useSubmitVehicle({
          data: data,
          updateStateComponent: updateVehicleData,
        })}
        initialValues_generic={initialValues_vehicle}
        validationSchema_generic={vehicleValidation}
        Form_generic={(props) => (
          <Vehicle_form
            {...props}
            dataModel={dataModel}
            setDataModel={setDataModel}
          />
        )}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        loaderData={loadDataState}
        structureData={Vehicle_structure({
          onOpen: () => setOpen(true), // función para abrir el modal
          route: varString.route, // ruta para trabajar peticiones axios
          propertyId: varString.propertyId, // propiedad del id
          propertyName: varString.propertyName, // propiedad de la descripción
        })}
        subStructureData={Vehicle_subStructure} // datos para la subEstructura
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Vehicle_main;
