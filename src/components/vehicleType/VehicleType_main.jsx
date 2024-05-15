import { FaCar } from "react-icons/fa";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import { VehicleType_structure } from "./VehicleType_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Formik } from "formik";
import * as Yup from "yup";
import useSubmitNewData from "../../hooks/useSubmitNewData";

const VehicleType_main = ({ vehicleType_data }) => {
  // estado para almacenar la información del mantenedor
  const [data, setData] = useState(vehicleType_data);
  const {onSubmit} = useSubmitNewData({setData});

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickDownloadData = () => alert("Descargar informacion");

  // valores para el formik
  const initialValues = {
    newData: "",
  };

  // esquema de validaciones
  const validationSchema = Yup.object().shape({
    newData: Yup.string()
      .trim()
      .required("El campo es requerido")
  });


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
                Tipo de Vehículo
              </ModalHeader>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit(onClose)}
                >
                  {({values, handleSubmit, handleChange, errors, handleBlur, isSubmitting, handleReset}) => (
                    <ModalBody>
                      <Input
                        color={
                          values.newData !== "" && errors.newData
                          ? "danger"
                          : "primary"
                        }
                        name="newData"
                        type="text"
                        label="Nuevo registro"
                        labelPlacement="outside"
                        variant="faded"
                        value={values.newData}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.newData && values.newData === ""}
                        errorMessage={values.newData === "" && errors.newData}
                      />

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
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando.." : "Registrar"}
                        </Button>
                      </ModalFooter>
                    </ModalBody>
                  )}
                </Formik>


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
