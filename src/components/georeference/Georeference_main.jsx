import { SiOpenstreetmap } from "react-icons/si";
import useGeoreference from "../../hooks/useGeoreference";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";
import DataTableComponent from "../DataTable_Component";
import { Georeference_structure } from "./Georeference_structure";
import Georeference_subStructure from "./Georeference_subStructure";

const varString = {
  title: "Georeferencias",
  titleModal: "Georeferencia",
  route: "georeferencia",
  propertyId: "cod_georeferencia",
  propertyName: "",
  cards: [
    {
      titleCard: "Mis georeferencias",
      iconCard: <SiOpenstreetmap size={35} />,
      countCard: "numberGeoreference",
    },
  ],
};

const Georeference_main = () => {
  const { data, numberGeoreference } = useGeoreference();
  const counterCard = { numberGeoreference };

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
        structureData={Georeference_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
        })}
        subStructureData={Georeference_subStructure}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Georeference_main;
