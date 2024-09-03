import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Formik } from "formik";
import { useEffect, useRef } from "react";

const ModalBaseForm = ({
  propertyId,
  stateComponent,
  updateStateComponent,
  title,
  size,
  isOpen,
  onOpenChange,
  useSubmit_generic,
  initialValues_generic,
  validationSchema_generic,
  Form_generic,
}) => {
  // desestructuración de estados del componente principal
  const { data, edit, idEdit } = stateComponent;

  let dataEdit = [];
  if (edit) {
    dataEdit = data.find((data) => data[propertyId] === idEdit);
  }

  // referencia para el input inicial
  const firstInputRef = useRef(null);

  // submit de datos del formulario
  const { onSubmit } = useSubmit_generic;

  // texto personalizado para btn del modal
  const textBtnSubmit = edit ? "Actualizar" : "Registrar";
  const textBtnSubmitting = edit ? "Actualizando..." : "Registrando...";

  useEffect(() => {
    if (!isOpen) updateStateComponent({ edit: false, idEdit: null });
    if (isOpen) firstInputRef.current.focus();
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      isDismissable={false}
      backdrop="blur"
      size={size}
      scrollBehavior="inside"
    >
      <ModalContent className="relative p-2 bg-gray-100 max-h-full">
        {(onClose) => (
          <>
            {/* header del modal */}
            <ModalHeader className="text-2xl px-4 py-3 rounded-lg">
              {title}
            </ModalHeader>

            {/* controlador de formulario con formik */}
            <Formik
              initialValues={initialValues_generic({
                data: edit ? dataEdit : null,
              })}
              validationSchema={validationSchema_generic()}
              onSubmit={onSubmit(onClose)}
            >
              {({
                values,
                handleSubmit,
                handleChange,
                setFieldValue,
                touched,
                errors,
                handleBlur,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="overflow-y-auto">
                  <ModalBody className="gap-6">
                    {/* contenido variable del formulario */}
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
                      {isSubmitting ? textBtnSubmitting : textBtnSubmit}
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

export default ModalBaseForm;
