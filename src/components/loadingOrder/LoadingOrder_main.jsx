import { useEffect, useState } from "react";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { IoDocuments } from "react-icons/io5";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import DataTableComponent from "../DataTable_Component";
import { LoadingOrder_structure } from "./LoadingOrder_structure";
import LoadingOrder_subStructure from "./LoadingOrder_subStructure";
import ModalDataChofer from "../../templates/ModalDataChofer";

const varString = {
  title: "Ordenes de carga",
  titleModal: "Order de carga",
  route: "orden_carga",
  propertyId: "cod_orden_carga",
  propertyName: "desc_orden_carga",
  cards: [
    {
      titleCard: "Ordenes de carga",
      iconCard: <IoDocuments size={35} />,
      countCard: "numLoadingOrder",
    },
  ],
};

const LoadingOrder_main = () => {
  const { data, dataChofer, numLoadingOrder, updateLoadingOrder } =
    useLoadingOrder();
  const counterCard = { numLoadingOrder };

  // usar un useEffect para peticiones adicionales

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

      {/* modale generico */}

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
