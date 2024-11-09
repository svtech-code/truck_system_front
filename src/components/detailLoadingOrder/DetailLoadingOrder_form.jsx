import { Textarea } from "@nextui-org/react";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import SelectComponent from "../SelectComponent";

const DetailLoadingOrder_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  const { dataTaxpayers, georeferences } = useLoadingOrder();

  return (
    <>
      {/* detalle de la orden de carga */}
      <div className="w-full flex">
        <Textarea
          color={
            touched.desc_detalle_orden_carga && errors.desc_detalle_orden_carga
              ? "danger"
              : "primary"
          }
          isRequired={true}
          ref={inputRef}
          variant="faded"
          name="desc_detalle_orden_carga"
          label="Detalle de la Orden de Carga"
          labelPlacement="outside"
          value={
            values.desc_detalle_orden_carga
              ? values.desc_detalle_orden_carga
              : ""
          }
          onChange={(e) =>
            setFieldValue(
              "desc_detalle_orden_carga",
              e.target.value.toUpperCase()
            )
          }
          onBlur={handleBlur}
          isInvalid={
            touched.desc_detalle_orden_carga && errors.desc_detalle_orden_carga
          }
          errorMessage={
            touched.desc_detalle_orden_carga && errors.desc_detalle_orden_carga
          }
        />
      </div>

      {/* Contribuyente */}
      <div className="w-full flex">
        <SelectComponent
          arrayDataForSelect={dataTaxpayers}
          nameCodDataInArray={"cod_contribuyente"}
          nameDescDataInArray={"desc_contribuyente"}
          nameCodDataInContext={"cod_contribuyente"}
          name={"cod_cliente"}
          setFieldValue={setFieldValue}
          label={"Contribuyente"}
          isRequired={true}
          isInvalid={
            touched.cod_contribuyente && errors.cod_contribuyente ? true : false
          }
          errorMessage={touched.cod_contribuyente && errors.cod_contribuyente}
          loadForCod={values.cod_cliente}
        />
      </div>

      {/* origen y destino */}
      <div className="w-full flex gap-4">
        <div className="w-1/2">
          <SelectComponent
            arrayDataForSelect={georeferences}
            nameCodDataInArray={"cod_georeferencia"}
            nameDescDataInArray={"desc_georeferencia"}
            nameCodDataInContext={"cod_georeferencia"}
            name={"cod_origen"}
            setFieldValue={setFieldValue}
            label={"Origen viaje"}
            isRequired={true}
            isInvalid={
              touched.cod_georeferencia && errors.cod_georeferencia
                ? true
                : false
            }
            errorMessage={touched.cod_georeferencia && errors.cod_georeferencia}
            loadForCod={values.cod_origen}
          />
        </div>

        <div className="w-1/2">
          <SelectComponent
            arrayDataForSelect={georeferences}
            nameCodDataInArray={"cod_georeferencia"}
            nameDescDataInArray={"desc_georeferencia"}
            nameCodDataInContext={"cod_georeferencia"}
            name={"cod_destino"}
            setFieldValue={setFieldValue}
            label={"Destino viaje"}
            isRequired={true}
            isInvalid={
              touched.cod_georeferencia && errors.cod_georeferencia
                ? true
                : false
            }
            errorMessage={touched.cod_georeferencia && errors.cod_georeferencia}
            loadForCod={values.cod_destino}
          />
        </div>
      </div>
    </>
  );
};

export default DetailLoadingOrder_form;
