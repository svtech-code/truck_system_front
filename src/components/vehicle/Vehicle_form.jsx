import { Input } from "@nextui-org/react";
import Select_Component_load from "../Select_Component_load";
import useVehicle from "../../hooks/useVehicle";

const Vehicle_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  firstInputRef,
  onOpen,
}) => {
  const { modelVehicle, typeVehicle, drivers, mainAcopladoData } = useVehicle();

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

  // manejador de nuevo modelo
  const handleFieldValue = (name, value) => {
    if (value === "__new__") {
      onOpen();
      setFieldValue(name, null); // para evitar que se envie con esta opción y obligar la selección de datos válidos
    } else {
      setFieldValue(name, value);
    }
  };
  // console.log(typeVehicle);

  return (
    <>
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
          dataList={typeVehicle}
          name={"desc_tipo_vehiculo"}
          label={"Tipos vehículo"}
          itemKey="cod_tipo_vehiculo"
          detail="desc_tipo_vehiculo"
          value={values.desc_tipo_vehiculo}
          setFieldValue={setFieldValue}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
        />

        <Select_Component_load
          dataList={modelVehicle}
          name={"desc_modelo"}
          label={"Modelo / Marca"}
          itemKey="cod_modelo"
          detail="desc_modelo"
          value={values.desc_modelo}
          setFieldValue={handleFieldValue}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
          subDetail={"desc_marca"}
          allowNew={true}
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

        {/* <Select_Component_load
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
          required={false} // cambiar a true, cuando el endpoint funcione
        /> */}
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
          dataList={drivers}
          name={"desc_chofer"}
          label={"Chofer"}
          itemKey="cod_usuario"
          detail="desc_usuario"
          value={values.desc_chofer}
          setFieldValue={setFieldValue}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          required={true}
        />

        <div className="w-full sm:w-[12rem]">
          <Select_Component_load
            dataList={mainAcopladoData}
            name={"cod_acoplado"}
            label={"Pte. Acoplado"}
            itemKey="cod_vehiculo"
            detail="patente"
            value={values.cod_acoplado}
            setFieldValue={setFieldValue}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            required={false}
            valueForUpdate={"cod_acoplado"}
          />
        </div>
      </div>
    </>
  );
};

export default Vehicle_form;
