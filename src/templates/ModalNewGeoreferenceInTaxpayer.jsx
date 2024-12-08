import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Formik } from "formik";
import initialValues_georeference from "../utils/initialValues/georeferenceValue";
import georeferenceValidation from "../validations/georeferenceValidation";
import { useRef, useEffect } from "react";
import useTaxpayer from "../hooks/useTaxpayer";
import useSubmitGeoreference from "../hooks/submit/useSubmitGeoreference";

const ModalNewGeoreferenceInTaxpayer = ({
  isOpen,
  onOpenChange,
  Form_generic,
}) => {
  const { georeference, updateTaxpayerData } = useTaxpayer();

  // referencia para el input inicial
  const firstInputRef = useRef(null);

  // submit de datos del formulario
  const { onSubmit } = useSubmitGeoreference({
    data: georeference,
    updateStateComponent: updateTaxpayerData,
    dataContext: "georeference",
  });

  useEffect(() => {
    if (isOpen) firstInputRef.current.focus();
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      isDismissable={false}
      backdrop="blur"
      size="xl"
      scrollBehavior="inside"
    >
      <ModalContent className="relative p-2 bg-gray-100 max-h-full">
        {(onClose) => (
          <>
            {/* header del modal */}
            <ModalHeader className="text-2xl px-4 py-3 rounded-lg">
              Georeferencia
            </ModalHeader>

            {/* controlador del formulario con Formik */}
            <Formik
              initialValues={initialValues_georeference({ data: null })}
              validationSchema={georeferenceValidation}
              onSubmit={onSubmit(onClose)}
            >
              {({
                values,
                handleSubmit,
                setFieldValue,
                handleChange,
                touched,
                errors,
                handleBlur,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="overflow-y-auto">
                  <ModalBody className="gap-6">
                    <Form_generic
                      values={values}
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                      inputRef={firstInputRef}
                    />
                  </ModalBody>

                  <ModalFooter>
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
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Registrando..." : "Registrar"}
                    </Button>
                  </ModalFooter>
                </form>
              )}
            </Formik>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalNewGeoreferenceInTaxpayer;
