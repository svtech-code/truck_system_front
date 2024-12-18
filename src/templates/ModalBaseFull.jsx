import { Button, ModalBody, Modal, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import HeaderComponent from "../components/Header_Component";
import HeaderCardComponent from "../components/HeaderCard_Component";
import { FaUserTie } from "react-icons/fa";
import DataTableComponent from "../components/DataTable_Component";
import { LoadingOrderGuide_structure } from "../components/loadingOrderGuide/LoadingOrderGuide_structure";
import { useState } from "react";


// trabajar en base al endopoint que se debe crear
const varString = {
  title: "Acuse de guías",
  titleModal: "Acuse de guía",
  route: "guia",
  propertyId: "cod_guia",
  propertyName: "desc_guia",
  cards: [
    {
      titleCard: "Registro guías",
      iconCard: <FaUserTie size={35} />,
      countCard: "numberTaxpayers",
    },
  ],
};


// data estática (cambiar por data del endpoint) / ver donde la llamo
const testData = [
  {
    numero_guia: "G2824",
    fecha_guia: "2023-01-10",
    fecha_recepcion_guia: "2023-01-22",
    cliente: "Pedro Pérez",
    unidad_medida: "ltr",
    cantidad: 72,
    descripcion: "Product 14",
    valor_referencial: 679.93
  },
  {
    numero_guia: "G9935",
    fecha_guia: "2023-02-03",
    fecha_recepcion_guia: "2023-02-13",
    cliente: "Luisa Gómez",
    unidad_medida: "kg",
    cantidad: 48,
    descripcion: "Gadget 30",
    valor_referencial: 510.3
  },
  {
    numero_guia: "G1434",
    fecha_guia: "2023-08-06",
    fecha_recepcion_guia: "2023-08-10",
    cliente: "Ana Hernández",
    unidad_medida: "box",
    cantidad: 113,
    descripcion: "Device 76",
    valor_referencial: 285.41
  },
  {
    numero_guia: "G1106",
    fecha_guia: "2023-10-22",
    fecha_recepcion_guia: "2023-11-04",
    cliente: "María Hernández",
    unidad_medida: "box",
    cantidad: 175,
    descripcion: "Tool 20",
    valor_referencial: 223.16
  },
  {
    numero_guia: "G6514",
    fecha_guia: "2023-02-09",
    fecha_recepcion_guia: "2023-02-11",
    cliente: "Luisa Gómez",
    unidad_medida: "unit",
    cantidad: 434,
    descripcion: "Tool 78",
    valor_referencial: 271.88
  },
];


const ModalBaseFull = ({
  isOpen,
  onOpenChange,
  numberLoadingOrder
}) => {

  const counterCard = testData.length;
  const [firstModalState, setFirstModalState] = useState(false);


  // agregar toda la información de una respectiva guia de orden de carga


  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl uppercase">
              {/*   Acuse guías orden de carga Nº {numberLoadingOrder} */}
            </ModalHeader>

            <ModalBody>

              {/* mover a un main de guias para pasar como parámetros  */}
              <HeaderComponent maintainer={`Acuse de guías ${numberLoadingOrder}`}>
                {
                  varString.cards.map((card, index) => (
                    <HeaderCardComponent
                      key={index}
                      title={card.titleCard}
                      icon={card.iconCard}
                      count={counterCard}
                    />
                  ))
                }
              </HeaderComponent>

              <DataTableComponent
                data={testData}
                onOpen={() => setFirstModalState(true)}
                structureData={LoadingOrderGuide_structure}
              />

            </ModalBody>

            <ModalFooter>
              <Button
                className="w-[8rem] text-lg"
                color="danger"
                variant="flat"
                onPress={onClose}
                aria-label="Botton para cerrar el modal"
              >Cerrar</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal >
  );
};


export default ModalBaseFull;
