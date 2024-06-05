import { Input } from "@nextui-org/react";
import Select_Component from "../Select_Component";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";
import ModalBase from "../../templates/ModalBase";
import useSubmitVehicle from "../../hooks/useSubmitVehicle";
import FormTest from "../FormTest";
import initialValues_vehicle from "../../utils/initialValues/vehicleValues";
import vehicleValidation from "../../validations/vehicleValidation";

const Vehicle_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  firstInputRef,
}) => {
  const [reload, setReload] = useState([]);

  // función manejador de la patente completa
  const myhandleChange = (e) => {
    let inputValue = e.target.value.toUpperCase();

    // If the user is trying to delete, remove the hyphen if present
    if (inputValue.length === 7 && inputValue[6] === "-") {
      inputValue = inputValue.slice(0, 6);
    } else if (inputValue.length === 6 && !inputValue.includes("-")) {
      // Insert a hyphen after the 6th character if it doesn't already exist
      inputValue = inputValue.slice(0, 6) + "-" + inputValue.slice(6);
    }

    setFieldValue("patente", inputValue);
  };

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // funcion para agregar nuevo dato desde el select
  const handleSelectChange = (e) => {
    if (e.target.value === "__new__") {
      onOpen();
      // Aquí puedes manejar la lógica para agregar un nuevo modelo
      // lanzar modal para agregar nuevo modelo
      // una vez agregado los datos, se deve actualizar el array en lo posible o volver a cargar este select
      // console.log("Agregar nuevo modelo");
      // setReload([
      //   {
      //     cod_modelo: 6,
      //     desc_modelo: "S2",
      //     desc_marca: "prueba",
      //   },
      // ]);
    } else {
      handleChange(e);
    }
  };

  return (
    <>
      <ModalBase
        title={"Modelo vehículo"}
        size={"2xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        useSubmit_generic={useSubmitVehicle}
        initialValues_generic={initialValues_vehicle}
        validationSchema_generic={vehicleValidation}
        Form_generic={(props) => <FormTest {...props} />}
      />

      {/* input patente y año */}
      <div className="flex flex-col xs:flex-row gap-4">
        <Input
          color={touched.patente && errors.patente ? "danger" : "primary"}
          name="patente"
          type="text"
          label="Patente"
          labelPlacement="outside"
          variant="faded"
          value={values.patente}
          ref={firstInputRef}
          isRequired={true}
          onChange={myhandleChange}
          onBlur={handleBlur}
          isInvalid={touched.patente && errors.patente}
          errorMessage={touched.patente && errors.patente}
          className="w-full xxs:w-[8rem]"
          description="Patente completa"
        />

        <Input
          color={
            touched.anioVehiculo && errors.anioVehiculo ? "danger" : "primary"
          }
          name="anioVehiculo"
          type="number"
          label="Año"
          labelPlacement="outside"
          variant="faded"
          value={values.anioVehiculo}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.anioVehiculo && errors.anioVehiculo}
          errorMessage={touched.anioVehiculo && errors.anioVehiculo}
          className="w-full xxs:w-[8rem]"
        />

        <Input
          color={
            touched.capacidadKG && errors.capacidadKG ? "danger" : "primary"
          }
          name="capacidadKG"
          type="number"
          label="Tonelaje"
          labelPlacement="outside"
          variant="faded"
          value={values.capacidadKG}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.capacidadKG && errors.capacidadKG}
          errorMessage={touched.capacidadKG && errors.capacidadKG}
          className="w-full xxs:w-[8rem]"
        />
      </div>
      {/* select tipoVehiculo, marca, modelo */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select_Component
          name={"idTipoVehiculo"}
          route="tipo_vehiculos"
          label={"Tipos vehículo"}
          itemKey="cod_tipo_vehiculo"
          detail="desc_tipo_vehiculo"
          value={values.idTipoVehiculo}
          handleChange={handleChange}
        />

        <Select_Component
          name={"idModelo"}
          route="modelos"
          label={"Modelo / Marca"}
          itemKey="cod_modelo"
          detail="desc_modelo"
          value={values.idModelo}
          handleChange={handleSelectChange}
          subDetail={"desc_marca"}
          allowNew={true}
          reload={reload}
        />
      </div>
      {/* input descripción y select contribullente */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          color={
            touched.descripcionVehiculo && errors.descripcionVehiculo
              ? "danger"
              : "primary"
          }
          name="descripcionVehiculo"
          type="text"
          label="Descripción"
          labelPlacement="outside"
          variant="faded"
          value={values.descripcionVehiculo}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("descripcionVehiculo", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.descripcionVehiculo && errors.descripcionVehiculo}
          errorMessage={
            touched.descripcionVehiculo && errors.descripcionVehiculo
          }
        />

        <Select_Component
          name={"idContribuyente"}
          route="estado_vehiculos"
          label={"Transportista"}
          itemKey="cod_estado_vehiculo"
          detail="desc_estado_vehiculo"
          value={values.idContribuyente}
          handleChange={handleChange}
        />
      </div>
      {/* input fechas de vencimiento */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          color={
            touched.vencimientoSeguro && errors.vencimientoSeguro
              ? "danger"
              : "primary"
          }
          name="vencimientoSeguro"
          type="date"
          label="Vencimiento seguro"
          labelPlacement="outside"
          variant="faded"
          value={values.vencimientoSeguro}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.vencimientoSeguro && errors.vencimientoSeguro}
          errorMessage={touched.vencimientoSeguro && errors.vencimientoSeguro}
        />
        <Input
          color={
            touched.vencimientoRevision && errors.vencimientoRevision
              ? "danger"
              : "primary"
          }
          name="vencimientoRevision"
          type="date"
          label="Vencimiento revisión"
          labelPlacement="outside"
          variant="faded"
          value={values.vencimientoRevision}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.vencimientoRevision && errors.vencimientoRevision}
          errorMessage={
            touched.vencimientoRevision && errors.vencimientoRevision
          }
        />
      </div>
      {/* Select chofer y acoplado */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select_Component
          name={"idChoferAsignado"}
          route="tipo_usuarios"
          label={"Chofer"}
          itemKey="cod_tipo_usuario"
          detail="desc_tipo_usuario"
          value={values.idChoferAsignado}
          handleChange={handleChange}
        />

        <Select_Component
          name={"idPatenteAcoplado"}
          route="vehiculos"
          label={"Pte. Acoplado"}
          itemKey="cod_vehiculo"
          detail="patente"
          value={values.idPatenteAcoplado}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default Vehicle_form;
