import { FaUserTie } from "react-icons/fa";
import useTaxpayer from "../../hooks/useTaxpayer";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import DataTableComponent from "../DataTable_Component";
import { Taxpayer_structure } from "./Taxpayer_structure";
import { useState } from "react";
import Taxpayer_subStructure from "./Taxpayer_subStructure";

const varString = {
  title: "Contribuyentes",
  titleModal: "Contribuyente",
  route: "contribuyentes",
  propertyId: "cod_contribuyente",
  propertyName: "desc_contribuyente",
  cards: [
    {
      titleCard: "Mis contribuyentes",
      iconCard: <FaUserTie size={35} />,
      countCard: "numberTaxpayers",
    },
  ],
};

const Taxpayer_main = () => {
  const { data, numberTaxpayers } = useTaxpayer();
  const counterCard = { numberTaxpayers };

  // estados para el manejo del modal
  const [open, setOpen] = useState(false);

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* header del mantenedor */}
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

      {/* modal generico */}

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        structureData={Taxpayer_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
        })}
        subStructureData={Taxpayer_subStructure}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Taxpayer_main;
