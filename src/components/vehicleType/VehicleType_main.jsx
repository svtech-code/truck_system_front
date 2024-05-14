import { FaCar } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleType_structure } from "./VehicleType_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const VehicleType_main = ({ vehicleType_data }) => {
  const [data, setData] = useState(vehicleType_data);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={"Tipos de vehículos"}>
        <HeaderCardComponent
          title={"Tipos de vehículos"}
          icon={<FaCar size={35} />}
          count={data.length}
        />
      </HeaderComponent>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        isDismissable={false}
        backdrop="blur"
        size="md"
      >
        <ModalContent className="relatice p-2 bg-gray-100">
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl px-4 py-3">
                Nuevo Tipo de Vehículo
              </ModalHeader>

              <ModalBody>
                <p>Prueba de contenido</p>
              </ModalBody>

              <ModalFooter className="w-full px-2">
                <Button
                  className="w-[8rem] text-lg"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancelar
                </Button>

                <Button
                  className="w-[8rem] text-lg"
                  color="primary"
                  // onPress={handleSubmit}
                  // disabled={isSubmitting}
                >
                  Registrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <DataTableComponent
        data={data}
        structureData={VehicleType_structure()}
        newData={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleType_main;
