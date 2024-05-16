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
import useSubmitNewData from "../hooks/useSubmitNewData";
import { Formik } from "formik";
import * as Yup from "yup";

const ModalNewData = ({
  setData,
  title,
  isOpen,
  onOpenChange,
  route,
  propertyName,
}) => {
  // desestructuración del hook personalizado para el registro de datos
  const { onSubmit } = useSubmitNewData({ setData, route, propertyName });

  // esquema de validaciones
  const validationSchema = Yup.object().shape({
    newData: Yup.string().trim().required("Campo requerido..!"),
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        isDismissable={false}
        backdrop="blur"
        size="md"
      >
        <ModalContent className="relative p-2 bg-gray-100">
          {(onClose) => (
            <>
              {/* header del modal */}
              <ModalHeader className="text-2xl px-4 py-3">{title}</ModalHeader>

              <Formik
                initialValues={{ newData: "" }}
                validationSchema={validationSchema}
                onSubmit={onSubmit(onClose)}
              >
                {({
                  values,
                  handleSubmit,
                  handleChange,
                  errors,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <>
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
                        isInvalid={values.newData === "" && errors.newData}
                        errorMessage={values.newData === "" && errors.newData}
                      />
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
                        variant="flat"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Registrando.." : "Registrar"}
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </Formik>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNewData;
