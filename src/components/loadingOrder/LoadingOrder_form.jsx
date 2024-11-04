import { DatePicker, Input, Textarea } from "@nextui-org/react";
import SelectComponent from "../SelectComponent";
import useLoadingOrder from "../../hooks/useLoadingOrder";

const LoadingOrder_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  const { dataCars } = useLoadingOrder();

  return (
    <>
      {/* numero de order y fecha de emisión */}
      <div className="w-full flex gap-x-4">
        <Input
          className="w-1/3"
          disabled={true}
          name="num_orden_carga"
          type="text"
          label="Nº Order"
          labelPlacement="outside"
          variant="faded"
          value={values.num_orden_carga ? values.num_orden_carga : ""}
        />

        {/* <Input
          className="w-1/3"
          name="fecha_orden_carga"
          type="date"
          label="Fecha de emisión"
          labelPlacement="outside"
          variant="faded"
          value={values.fecha_orden_carga}
          ref={inputRef}
        /> */}

        <DatePicker
          className="w-1/3"
          color={
            touched.fecha_orden_carga && errors.fecha_orden_carga
              ? "danger"
              : "default"
          }
          name="fecha_order_carga"
          label="Fecha de emisión"
          labelPlacement="outside"
          variant="bordered"
          // value={values.fecha_orden_carga ? values.fecha_orden_carga : ""}
          ref={inputRef}
          isRequired={true}
        />

        {/* agregar el ícono */}
      </div>

      {/* patente, acoplado y chofer */}
      <div className="flex gap-x-4">
        <div className="w-1/4">
          <SelectComponent
            arrayDataForSelect={dataCars}
            nameCodDataInArray={"cod_vehiculo"}
            nameDescDataInArray={"patente"}
            nameCodDataInContext={"cod_vehiculo"}
            name={"cod_vehiculo"}
            setFieldValue={setFieldValue}
            label={"Vehículo"}
            isRequired={true}
            isInvalid={
              touched.cod_vehiculo && errors.cod_vehiculo ? true : false
            }
            errorMessage={touched.cod_vehiculo && errors.cod_vehiculo}
            loadForDesc={values.desc_vehiculo}
          />
        </div>

        <Input
          className="w-1/4"
          disabled={true}
          name="desc_acoplado"
          type="text"
          label="Acoplado"
          labelPlacement="outside"
          value={values.desc_acoplado ? values.desc_acoplado : ""}
          isRequired={true}
          isInvalid={touched.desc_acoplado && errors.desc_acoplado}
          errorMessage={touched.desc_acoplado && errors.desc_acoplado}
        />

        <Input
          className="w-2/4"
          disabled={true}
          name="desc_chofer"
          type="text"
          label="Chofer"
          labelPlacement="outside"
          value={values.desc_chofer ? values.desc_chofer : ""}
          isRequired={true}
          isInvalid={touched.desc_chofer && errors.desc_chofer}
          errorMessage={touched.desc_chofer && errors.desc_chofer}
        />
      </div>

      {/* transportista */}
      <div className="flex gap-x-4">
        <Input
          disabled={true}
          name="desc_transportista"
          type="text"
          label="Transportista"
          labelPlacement="outside"
          value={values.desc_transportista ? values.desc_transportista : ""}
          isRequired={true}
          isInvalid={touched.desc_transportista && errors.desc_transportista}
          errorMessage={touched.desc_transportista && errors.desc_transportista}
        />
      </div>

      {/* descripción de la orden de carga */}
      <div className="flex w-full">
        <Textarea
          color="primary"
          variant="faded"
          name=""
          label="Descripción orden de carga"
          labelPlacement="outside"
          value={values.desc_orden_carga ? values.desc_orden_carga : ""}
          onChange={(e) =>
            setFieldValue("desc_orden_carga", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.desc_orden_carga && errors.desc_orden_carga}
          errorMessage={touched.desc_orden_carga && errors.desc_orden_carga}
        />
      </div>

      {/* agregar tabla con el o los detalles de la orden de carga */}
    </>
  );
};

export default LoadingOrder_form;
