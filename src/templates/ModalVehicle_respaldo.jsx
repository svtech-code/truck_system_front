import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import useSubmitVehicle from "../hooks/useSubmitVehicle";
import vehicleValidation from "../validations/vehicleValidation";
import { Formik } from "formik";
import Select_Component from "../components/Select_Component";
// import { useEffect } from "react";
import initialValues_vehicle from "../utils/initialValues/vehicleValues";

const ModalVehicle = ({ title, isOpen, onOpenChange }) => {
  // impotación del submit de datos
  const { onSubmit } = useSubmitVehicle();
  const edit = false;

  // texto personalizado para btn del modal
  const textBtnSubmit = edit ? "Actualizar" : "Registrar";
  const textBtnSubmitting = edit ? "Actualizando..." : "Registrando...";

  // valores iniciales
  const initialValues = initialValues_vehicle();

  // importación del esquema de validaciones
  const validationSchema = vehicleValidation();

  // reestablecer la acción del modal y el id (add or update)
  // useEffect(() => {
  //   // if (!isOpen) updateStateComponent({ edit: false, idEdit: null });
  //   // if (isOpen) inputRef.current.focus();
  // }, [isOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        isDismissable={false}
        backdrop="blur"
        size="xl"
        // className="sm:max-w-lg w-full"
        // className="sm:max-w-lg w-full"
        // className="h-full"
        scrollBehavior="inside"
      >
        <ModalContent className="relative p-2 bg-gray-100 max-h-full">
          {(onClose) => (
            <>
              {/* header del modal */}
              <ModalHeader className="text-2xl px-4 py-3 bg-blue-400 rounded-lg">
                {title}
              </ModalHeader>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                      {/* input patente y año */}
                      <div className="flex gap-4">
                        <Input
                          color="primary"
                          name="patente"
                          type="text"
                          label="Patente"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.patente}
                          // ref
                          isRequired={true}
                          onChange={(e) =>
                            setFieldValue(
                              "patente",
                              e.target.value.toUpperCase()
                            )
                          }
                          onBlur={handleBlur}
                          isInvalid={touched.patente && errors.patente}
                          errorMessage={touched.patente && errors.patente}
                          className="w-[8rem]"
                          description="Patente completa"
                        />

                        <Input
                          color="primary"
                          name="anioVehiculo"
                          type="text"
                          label="Año"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.anioVehiculo}
                          isRequired={true}
                          onChange={(e) =>
                            setFieldValue(
                              "anioVehiculo",
                              e.target.value.toUpperCase()
                            )
                          }
                          onBlur={handleBlur}
                          isInvalid={
                            touched.anioVehiculo && errors.anioVehiculo
                          }
                          errorMessage={
                            touched.anioVehiculo && errors.anioVehiculo
                          }
                          className="w-[8rem]"
                        />
                      </div>
                      {/* input tipoVehiculo, marca, modelo */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Select_Component
                          route="tipo_vehiculos"
                          label={"Tipos vehículo"}
                          itemKey="cod_tipo_vehiculo"
                          detail="desc_tipo_vehiculo"
                        />
                        <Select_Component
                          route="marcas"
                          label={"Marcas"}
                          itemKey="cod_marca"
                          detail="desc_marca"
                        />

                        <Input
                          color="primary"
                          name="modelo"
                          type="text"
                          label="Modelo"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.modeloVehiculo}
                          isRequired={true}
                          onChange={(e) =>
                            setFieldValue(
                              "modeloVehiculo",
                              e.target.value.toUpperCase()
                            )
                          }
                          onBlur={handleBlur}
                          isInvalid={
                            touched.modeloVehiculo && errors.modeloVehiculo
                          }
                          errorMessage={
                            touched.modeloVehiculo && errors.modeloVehiculo
                          }
                        />
                      </div>

                      {/* input descripcion y capacidad */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                          color="primary"
                          name="descripcionVehiculo"
                          type="text"
                          label="Descripción"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.descripcionVehiculo}
                          // ref
                          isRequired={true}
                          onChange={(e) =>
                            setFieldValue(
                              "descripcionVehiculo",
                              e.target.value.toUpperCase()
                            )
                          }
                          onBlur={handleBlur}
                          isInvalid={
                            touched.descripcionVehiculo &&
                            errors.descripcionVehiculo
                          }
                          errorMessage={
                            touched.descripcionVehiculo &&
                            errors.descripcionVehiculo
                          }
                        />

                        <Input
                          color="primary"
                          name="capacidadKG"
                          type="number"
                          label="Tonelaje"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.capacidadKG}
                          isRequired={true}
                          onChange={(e) =>
                            setFieldValue(
                              "capacidadKG",
                              e.target.value.toUpperCase()
                            )
                          }
                          onBlur={handleBlur}
                          isInvalid={touched.capacidadKG && errors.capacidadKG}
                          errorMessage={
                            touched.capacidadKG && errors.capacidadKG
                          }
                          className="w-[10rem]"
                        />
                      </div>
                      {/* input fechas de vencimiento */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                          color="primary"
                          name="vencimientoSeguro"
                          type="date"
                          label="Vencimiento seguro"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.vencimientoSeguro}
                          isRequired={true}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            touched.vencimientoSeguro &&
                            errors.vencimientoSeguro
                          }
                          errorMessage={
                            touched.vencimientoSeguro &&
                            errors.vencimientoSeguro
                          }
                        />
                        <Input
                          color="primary"
                          name="vencimientoRevision"
                          type="date"
                          label="Vencimiento revisión"
                          labelPlacement="outside"
                          variant="faded"
                          value={values.vencimientoRevision}
                          isRequired={true}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            touched.vencimientoRevision &&
                            errors.vencimientoRevision
                          }
                          errorMessage={
                            touched.vencimientoRevision &&
                            errors.vencimientoRevision
                          }
                        />
                      </div>

                      {/* select de contribullete */}
                      <Select_Component
                        route="estado_vehiculos"
                        label={"Contribullente"}
                        itemKey="cod_estado_vehiculo"
                        detail="desc_estado_vehiculo"
                      />

                      {/* input chofer y acoplado */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Select_Component
                          route="tipo_usuarios"
                          label={"Chofer"}
                          itemKey="cod_tipo_usuario"
                          detail="desc_tipo_usuario"
                        />

                        <Select_Component
                          route="vehiculos"
                          label={"Pte. Acoplado"}
                          itemKey="cod_vehiculo"
                          detail="patente"
                        />
                      </div>
                    </ModalBody>

                    <ModalFooter className="w-full px-2 mt-4">
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
    </>
  );
};

export default ModalVehicle;
