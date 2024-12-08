import { Input, Textarea } from "@nextui-org/react";
import SelectComponent from "../SelectComponent";
import useTaxpayer from "../../hooks/useTaxpayer";

const TaxpayerGeoreference_form = ({
  values,
  setFieldValue,
  handlerBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  const { commune } = useTaxpayer();

  return (
    <>
      {/* Dirección y número */}
      <div className="flex gap-x-4">
        {/* dirección georeferencia */}
        <Input
          className="grow min-w-[15rem]"
          color={touched.direccion && errors.direccion ? "danger" : "primary"}
          name="direccion"
          type="text"
          label="Dirección"
          labelPlacement="outside"
          variant="faded"
          value={values.direccion ? values.direccion.toUpperCase() : ""}
          ref={inputRef}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("direccion", e.target.value.toUpperCase())
          }
          onBlur={handlerBlur}
          isInvalid={touched.direccion && errors.direccion}
          errorMessage={touched.direccion && errors.direccion}
        />

        {/* número dirección georeferencia */}
        <Input
          className="w-[8rem]"
          color={touched.numero && errors.numero ? "danger" : "primary"}
          name="numero"
          type="text"
          label="Número"
          labelPlacement="outside"
          variant="faded"
          value={values.numero ? values.numero.toUpperCase() : ""}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("numero", e.target.value.toUpperCase())
          }
          onBlur={handlerBlur}
          isInvalid={touched.numero && errors.numero}
          errorMessage={touched.numero && errors.numero}
        />
      </div>

      {/* referencia dirección */}
      <div className="flex gap-x-4 w-full">
        {/* referencia dirección georeferencia */}
        <Input
          className=""
          color={
            touched.referencia_direccion && errors.referencia_direccion
              ? "danger"
              : "primary"
          }
          name="referencia_direccion"
          type="text"
          label="Referencia dirección"
          labelPlacement="outside"
          variant="faded"
          value={
            values.referencia_direccion
              ? values.referencia_direccion.toUpperCase()
              : ""
          }
          isRequired={true}
          onChange={(e) =>
            setFieldValue("referencia_direccion", e.target.value.toUpperCase())
          }
          onBlur={handlerBlur}
          isInvalid={
            touched.referencia_direccion && errors.referencia_direccion
          }
          errorMessage={
            touched.referencia_direccion && errors.referencia_direccion
          }
        />
      </div>

      {/* latitud, logitud y comuna */}
      <div className="flex gap-x-4">
        {/* latitud georeferencia */}
        <Input
          className="w-[8rem]"
          color={touched.latitud && errors.latitud ? "danger" : "primary"}
          name="latitud"
          type="number"
          label="Latitud"
          labelPlacement="outside"
          variant="faded"
          value={values.latitud || ""}
          isRequired={true}
          onChange={handleChange}
          onBlur={handlerBlur}
          isInvalid={touched.latitud && errors.latitud}
          errorMessage={touched.latitud && errors.latitud}
        />

        {/* longitud georeferencia */}
        <Input
          className="w-[8rem]"
          color={touched.longitud && errors.longitud ? "danger" : "primary"}
          name="longitud"
          type="number"
          label="Longitud"
          labelPlacement="outside"
          variant="faded"
          value={values.longitud || ""}
          isRequired={true}
          onChange={handleChange}
          onBlur={handlerBlur}
          isInvalid={touched.longitud && errors.longitud}
          errorMessage={touched.longitud && errors.longitud}
        />

        {/* comuna georeferencia */}
        <div className="grow">
          <SelectComponent
            arrayDataForSelect={commune}
            nameCodDataInArray={"cod_comuna"}
            nameDescDataInArray={"desc_comuna"}
            nameCodDataInContext={"cod_comuna"}
            name={"cod_comuna"}
            setFieldValue={setFieldValue}
            label={"Comuna"}
            isRequired={true}
            isInvalid={touched.cod_comuna && errors.cod_comuna ? true : false}
            errorMessage={touched.cod_comuna && errors.cod_comuna}
            loadForCod={values.cod_comuna}
          />
        </div>
      </div>

      {/* descripción georeferencia */}
      <div className="flex w-full">
        <Textarea
          color={
            touched.desc_georeferencia && errors.desc_georeferencia
              ? "danger"
              : "primary"
          }
          variant="faded"
          name="desc_georeferencia"
          label="Descripción de la georeferencia"
          labelPlacement="outside"
          value={
            values.desc_georeferencia
              ? values.desc_georeferencia.toUpperCase()
              : ""
          }
          onChange={(e) =>
            setFieldValue("desc_georeferencia", e.target.value.toUpperCase())
          }
          onBlur={handlerBlur}
          isInvalid={touched.desc_georeferencia && errors.desc_georeferencia}
          errorMessage={touched.desc_georeferencia && errors.desc_georeferencia}
        />
      </div>
    </>
  );
};

export default TaxpayerGeoreference_form;
