import { Input } from "@nextui-org/react";
import SelectComponent from "../SelectComponent";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import { useEffect } from "react";
import DetailLoadingOrder_main from "../detailLoadingOrder/DetailLoadingOrder_main";

const LoadingOrder_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  const { dataCars, dataCoupled, dataDriver, dataTaxpayers, georeferences } =
    useLoadingOrder();

  // useEffect para precargar datos de acoplado y chofer desde vehiculo
  useEffect(() => {
    if (values.cod_vehiculo !== null) {
      // obtención del array de vehiculo seleccionado
      const arrayCard =
        dataCars.find(
          (item) =>
            item.cod_vehiculo.toString() === values.cod_vehiculo.toString()
        ) || {};

      // obatención del array de acopaldo
      const arrayCouple =
        dataCoupled.find(
          (item) =>
            item?.cod_vehiculo?.toString() ===
            arrayCard?.cod_acoplado?.toString()
        ) || {};

      setFieldValue("cod_acoplado", arrayCouple.cod_vehiculo);
      setFieldValue("cod_chofer", arrayCard.cod_chofer);
      setFieldValue("cod_transportista", arrayCard.cod_transportista);
      setFieldValue("desc_transportista", arrayCard.desc_transportista);
    } else {
      // console.log("Se limpian los datos");
      setFieldValue("cod_acoplado", null);
      setFieldValue("cod_chofer", null);
      setFieldValue("cod_transportista", null);
    }
  }, [values.cod_vehiculo]);

  return (
    <>
      {/* numero de order y fecha de emisión */}
      <div className="w-full flex gap-4">
        <Input
          className="w-[7rem]"
          disabled={true}
          name="num_orden_carga"
          type="text"
          label="Nº Order"
          labelPlacement="outside"
          variant="faded"
          value={values.num_orden_carga ? values.num_orden_carga : ""}
        />

        <Input
          className="w-[10rem]"
          color={
            touched.fecha_orden_carga && errors.fecha_orden_carga
              ? "danger"
              : "default"
          }
          name="fecha_order_carga"
          type="date"
          label="Fecha de emisión"
          labelPlacement="outside"
          variant="faded"
          value={values.fecha_orden_carga}
          ref={inputRef}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.fecha_orden_carga && errors.fecha_orden_carga}
          errorMessage={touched.fecha_orden_carga && errors.fecha_orden_carga}
        />

        {/* agregar el ícono */}
      </div>

      {/* patente, acoplado y chofer */}
      <div className="flex gap-4 flex-wrap">
        <div className="w-[8rem]">
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
            loadForCod={values.cod_vehiculo}
          />
        </div>

        <div className="w-[8rem]">
          <SelectComponent
            arrayDataForSelect={dataCoupled}
            nameCodDataInArray={"cod_vehiculo"}
            nameDescDataInArray={"patente"}
            nameCodDataInContext={"cod_vehiculo"}
            name={"cod_acoplado"}
            setFieldValue={setFieldValue}
            label={"Acoplado"}
            isInvalid={
              touched.cod_acoplado && errors.cod_acoplado ? true : false
            }
            errorMessage={touched.cod_acoplado && errors.cod_acoplado}
            loadForCod={values.cod_acoplado}
          />
        </div>

        <div className="grow min-w-[20rem]">
          <SelectComponent
            arrayDataForSelect={dataDriver}
            nameCodDataInArray={"cod_usuario"}
            nameDescDataInArray={"desc_usuario"}
            nameCodDataInContext={"cod_chofer"}
            setFieldValue={setFieldValue}
            label={"Chofer"}
            isRequired={true}
            isInvalid={touched.cod_chofer && errors.cod_chofer ? true : false}
            errorMessage={touched.cod_chofer && errors.cod_chofer}
            loadForCod={values.cod_chofer}
          />
        </div>
      </div>

      {/* transportista */}
      <div className="flex gap-4">
        <Input
          disabled={true}
          name="desc_transportista"
          type="text"
          label="Transportista"
          labelPlacement="outside"
          variant="faded"
          value={values.desc_transportista ? values.desc_transportista : ""}
          isRequired={true}
          isInvalid={touched.desc_transportista && errors.desc_transportista}
          errorMessage={touched.desc_transportista && errors.desc_transportista}
        />
      </div>

      {/* detalles de la carga */}
      <DetailLoadingOrder_main
        dataDetail={values.detalles_orden_carga}
        setFieldValue={setFieldValue}
        values={values}
        dataTaxpayers={dataTaxpayers}
        georeferences={georeferences}
      />
    </>
  );
};

export default LoadingOrder_form;
