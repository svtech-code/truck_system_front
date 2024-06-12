import { Input } from "@nextui-org/react";
import Select_Component_load from "../Select_Component_load";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import useVehicle from "../../hooks/useVehicle";

const Vehicle_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  firstInputRef,
}) => {
  const { driveList, mainAcopladoData } = useVehicle();

  // estado usado para almacenar
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

    setFieldValue("patente_completa", inputValue);
  };

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // funcion para agregar nuevo dato desde el select
  const handleSelectChange = (e) => {
    if (e.target.value === "__new__") {
      // onOpen();
      console.log("modal para agregar modelo");
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
      {/* <ModalBase
        title={"Modelo vehículo"}
        size={"2xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        useSubmit_generic={useSubmitVehicle}
        initialValues_generic={initialValues_vehicle}
        validationSchema_generic={vehicleValidation}
        Form_generic={(props) => <FormTest {...props} />}
      /> */}

      {/* input patente, año y tonelaje */}
      <div className="flex flex-col xs:flex-row gap-4">
        <Input
          color={
            touched.patente_completa && errors.patente_completa
              ? "danger"
              : "primary"
          }
          name="patente_completa"
          type="text"
          label="Patente"
          labelPlacement="outside"
          variant="faded"
          value={values.patente_completa}
          ref={firstInputRef}
          isRequired={true}
          onChange={myhandleChange}
          onBlur={handleBlur}
          isInvalid={touched.patente_completa && errors.patente_completa}
          errorMessage={touched.patente_completa && errors.patente_completa}
          className="w-full xxs:w-[8rem]"
          description="Patente completa"
        />

        <Input
          color={touched.anio && errors.anio ? "danger" : "primary"}
          name="anio"
          type="number"
          label="Año"
          labelPlacement="outside"
          variant="faded"
          value={values.anio}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.anio && errors.anio}
          errorMessage={touched.anio && errors.anio}
          className="w-full xxs:w-[8rem]"
        />

        <Input
          color={
            touched.cantidad_kilos && errors.cantidad_kilos
              ? "danger"
              : "primary"
          }
          name="cantidad_kilos"
          type="number"
          label="Tonelaje"
          labelPlacement="outside"
          variant="faded"
          value={values.cantidad_kilos}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.cantidad_kilos && errors.cantidad_kilos}
          errorMessage={touched.cantidad_kilos && errors.cantidad_kilos}
          className="w-full xxs:w-[8rem]"
        />
      </div>

      {/* select tipoVehiculo y modelo */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select_Component_load
          name={"desc_tipo_vehiculo"}
          route="tipo_vehiculos"
          label={"Tipos vehículo"}
          itemKey="cod_tipo_vehiculo"
          detail="desc_tipo_vehiculo"
          value={values.desc_tipo_vehiculo}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
        />

        <Select_Component_load
          name={"desc_modelo"}
          route="modelos"
          label={"Modelo / Marca"}
          itemKey="cod_modelo"
          detail="desc_modelo"
          value={values.desc_modelo}
          handleChange={handleSelectChange}
          subDetail={"desc_marca"}
          allowNew={true}
          reload={reload} // pensado para la recarga al agregar nuevo modelo
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
        />
      </div>

      {/* input descripción y select transportista */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          color={
            touched.desc_vehiculo && errors.desc_vehiculo ? "danger" : "primary"
          }
          name="desc_vehiculo"
          type="text"
          label="Descripción"
          labelPlacement="outside"
          variant="faded"
          value={values.desc_vehiculo}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("desc_vehiculo", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.desc_vehiculo && errors.desc_vehiculo}
          errorMessage={touched.desc_vehiculo && errors.desc_vehiculo}
        />

        <Select_Component_load
          name={"idTransportista"}
          route="estado_vehiculos"
          label={"Transportista"}
          itemKey="cod_estado_vehiculo"
          detail="desc_estado_vehiculo"
          value={values.idTransportista}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
        />
      </div>

      {/* input fechas de vencimiento */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          color={
            touched.fecha_vigencia_seguro && errors.fecha_vigencia_seguro
              ? "danger"
              : "primary"
          }
          name="fecha_vigencia_seguro"
          type="date"
          label="Vencimiento seguro"
          labelPlacement="outside"
          variant="faded"
          value={values.fecha_vigencia_seguro}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={
            touched.fecha_vigencia_seguro && errors.fecha_vigencia_seguro
          }
          errorMessage={
            touched.fecha_vigencia_seguro && errors.fecha_vigencia_seguro
          }
        />

        <Input
          color={
            touched.fecha_vigencia_revision && errors.fecha_vigencia_revision
              ? "danger"
              : "primary"
          }
          name="fecha_vigencia_revision"
          type="date"
          label="Vencimiento revisión"
          labelPlacement="outside"
          variant="faded"
          value={values.fecha_vigencia_revision}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={
            touched.fecha_vigencia_revision && errors.fecha_vigencia_revision
          }
          errorMessage={
            touched.fecha_vigencia_revision && errors.fecha_vigencia_revision
          }
        />
      </div>

      {/* Select chofer y acoplado */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select_Component_load
          name={"desc_chofer"}
          route="usuarios"
          label={"Chofer"}
          itemKey="cod_usuario"
          detail="desc_usuario"
          value={values.desc_chofer}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
          dataList={driveList}
        />
        <div className="w-full sm:w-[12rem]">
          <Select_Component_load
            name={"cod_acoplado"}
            route="vehiculos"
            label={"Pte. Acoplado"}
            itemKey="cod_vehiculo"
            detail="patente"
            value={values.cod_acoplado}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            required={false}
            dataList={mainAcopladoData}
          />
        </div>
      </div>
    </>
  );
};

export default Vehicle_form;
