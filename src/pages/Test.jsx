import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import useSubmitVehicle from "../hooks/useSubmitVehicle";
import vehicleValidation from "../validations/vehicleValidation";
import { Formik } from "formik";

const Test = () => {
  // importación de submit de datos
  const { onSubmit } = useSubmitVehicle();

  // importación del esquema de validación
  const validationSchema = vehicleValidation();

  // variables para trabajar con modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const initialValues = {
    patente: "",
    idTipoVehiculo: "",
    idMarcaVehiculo: "",
    idModeloVehiculo: "", // revisar si es necesario
    capacidadKG: "",
    estado: "",
    descripcionVehiculo: "",
    anioVehiculo: "",
    vencimientoSeguro: "",
    vencimientoRevision: "",
    idPatenteAcoplado: "",
    idChoferAsignado: "",
  };

  return (
    <>
      <Button onClick={onOpen}>Modal</Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        isDismissable={false}
        backdrop="blur"
        size="2xl"
      >
        <ModalContent className="relative p-2 bg-gray-100">
          {(onClose) => (
            <>
              {/* header del modal */}
              <ModalHeader className="text-2xl px-4 py-3">
                Ingreso de vehículo
              </ModalHeader>

              <Formik initialValues={initialValues}></Formik>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Test;
