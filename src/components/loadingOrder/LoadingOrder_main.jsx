import { useEffect, useState } from "react";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { IoDocuments } from "react-icons/io5";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import DataTableComponent from "../DataTable_Component";
import { LoadingOrder_structure } from "./LoadingOrder_structure";
import LoadingOrder_subStructure from "./LoadingOrder_subStructure";
import ModalDataChofer from "../../templates/ModalDataChofer";
import ModalBaseForm from "../../templates/ModalBaseForm";
import useSubmitLoadingOrder from "../../hooks/submit/useSubmitLoadingOrder";
import initialValues_LoadingOrder from "../../utils/initialValues/loadingOrderValue";
import loadingOrderValidation from "../../validations/loadingOrderValidation";
import LoadingOrder_form from "./LoadingOrder_form";
import { getData } from "../../api/apiGet";

const varString = {
  title: "Ordenes de carga",
  titleModal: "Orden de carga",
  route: "orden_carga",
  propertyId: "cod_orden_carga",
  propertyName: "desc_orden_carga",
  cards: [
    {
      titleCard: "Ordenes de carga",
      iconCard: <IoDocuments size={35} />,
      countCard: "numberOrders",
    },
  ],
};

const LoadingOrder_main = () => {
  const { data, dataChofer, numberOrders, updateLoadingOrder } =
    useLoadingOrder();
  const counterCard = { numberOrders };

  // usar un useEffect para peticiones adicionales
  useEffect(() => {
    const getDataLoadingOrder = async () => {
      const [vehicle, driver, taxpyer, georeferences] = await Promise.all([
        // getData({ endPoint: "vehiculos" }),
        getData({ endPoint: "vehiculos_con_tipo" }),
        getData({ endPoint: "choferes" }),
        getData({ endPoint: "contribuyentes" }),
        getData({ endPoint: "georeferencias" }),
      ]);

      // obtención de los vehiculos
      const cars = vehicle?.response.filter(
        (car) => car.permite_acoplado === true
      );

      // obtención de los acoplados
      const Coupleds = vehicle?.response.filter(
        (coupled) => coupled.permite_acoplado === false
      );

      updateLoadingOrder({
        dataCars: cars,
        dataCoupled: Coupleds,
        dataDriver: driver?.response,
        dataTaxpayers: taxpyer?.response.filter(
          (taxpayer) => !taxpayer.transportista
        ),
        dataCarriers: taxpyer?.response.filter(
          (carrier) => carrier.transportista
        ),
        georeferences: georeferences?.response,
      });
    };

    getDataLoadingOrder();
  }, []);

  // estados para el manejo del modal
  const [open, setOpen] = useState(false);
  const [openModalChofer, setOpenModalChofer] = useState(false);

  const closeModalChofer = () => {
    setOpenModalChofer(false);
    updateLoadingOrder({ dataChofer: [] });
  };

  // evento para generar descarga de información
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={varString.title}>
        {varString.cards.map((card, index) => (
          <HeaderCardComponent
            key={index}
            title={card.titleCard}
            icon={card.iconCard}
            count={counterCard[card.countCard]}
          />
        ))}
      </HeaderComponent>

      {/* modal para mostrar datos del chofer */}
      <ModalDataChofer
        isOpen={openModalChofer}
        onOpenChange={closeModalChofer}
        data={dataChofer}
      />

      {/* modal generico */}
      <ModalBaseForm
        propertyId={varString.propertyId}
        stateComponent={useLoadingOrder()}
        updateStateComponent={updateLoadingOrder}
        title={varString.titleModal}
        size={"4xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        useSubmit_generic={useSubmitLoadingOrder({
          data,
          updateStateComponent: updateLoadingOrder,
        })}
        initialValues_generic={initialValues_LoadingOrder}
        validationSchema_generic={loadingOrderValidation}
        Form_generic={(props) => <LoadingOrder_form {...props} />}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        structureData={LoadingOrder_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
          setOpenModalChofer: setOpenModalChofer,
        })}
        subStructureData={LoadingOrder_subStructure}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default LoadingOrder_main;
