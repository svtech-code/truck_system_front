import { Chip, Input } from "@nextui-org/react";
import SelectComponent from "../SelectComponent";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import { useCallback, useEffect, useState } from "react";
import DetailLoadingOrder_main from "../detailLoadingOrder/DetailLoadingOrder_main";
import { pre } from "framer-motion/client";

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

  // // filtro de los carros en uso
  // const carsInUse = useCallback((data) => {
  //   const stateCar = data?.estado ? "En uso" : "Disponible";
  //   return (
  //     <Chip size="sm" isDisabled={data?.estado} color="primary">
  //       {stateCar}
  //     </Chip>
  //   );
  // }, []);

  // // filtro para obtener los vehículos
  // const descriptionCars = useCallback((data) => {
  //   const description = data?.cod_vehiculo ? data?.desc_marca : "";
  //   // const description = `${data?.desc_marca} ${data?.desc_modelo}`;
  //   // return `${data?.desc_marca} ${data?.desc_modelo}`;
  //   return description;
  // }, []);

  // // useEffect para precargar datos de acoplado y chofer desde vehiculo
  // useEffect(() => {
  //   // if (values.cod_vehiculo !== null) {
  //   //   // obtención del array de vehiculo seleccionado
  //   //   const arrayCard =
  //   //     dataCars.find(
  //   //       (item) =>
  //   //         item.cod_vehiculo.toString() === values.cod_vehiculo.toString()
  //   //     ) || {};
  //   //   // obatención del array de acopaldo
  //   //   const arrayCouple =
  //   //     dataCoupled.find(
  //   //       (item) =>
  //   //         item?.cod_vehiculo?.toString() ===
  //   //         arrayCard?.cod_acoplado?.toString()
  //   //     ) || {};
  //   //   setFieldValue("cod_acoplado", arrayCouple.cod_vehiculo);
  //   //   setFieldValue("cod_chofer", arrayCard.cod_chofer);
  //   //   setFieldValue("cod_transportista", arrayCard.cod_transportista);
  //   //   setFieldValue("desc_transportista", arrayCard.desc_transportista);
  //   // } else {
  //   //   // console.log("Se limpian los datos");
  //   //   setFieldValue("cod_acoplado", null);
  //   //   setFieldValue("cod_chofer", null);
  //   //   setFieldValue("cod_transportista", null);
  //   // }
  // }, [values.cod_vehiculo]);

  // // useEffect para aplicar filtro al momento de cambiar el transportista
  // useEffect(() => {
  //   // if (values.cod_transportista !== null) {
  //   //   console.log("Se cambia el transportista");
  //   // } else {
  //   //   console.log("Se limpian los datos");
  //   // }
  // }, [values.cod_transportista]);

  // PAUTA DE TRABAJO
  // 1. SELECCIÓN DE TRANSPORTISTA
  //  - FILTRAR TODOS LOS VEHICULOS Y ACOPLADOS POR TRANSPORTISTA
  //  - NECESARIO; CREAR UN STATE PARA VEHICULOS Y ACOPLADOS

  const [filterData, setFilterData] = useState({
    cars: dataCars || [],
    coupled: dataCoupled || [],
  });

  const updateFilterData = useCallback((newData) => {
    setFilterData((prevData) => ({ ...prevData, ...newData }));
  }, []);

  // función para obtener patentes filtradas
  const getFilterData = useCallback((array, values) => {
    return (
      array.filter(
        (item) =>
          item.cod_transportista?.toString() ===
          values.cod_transportista?.toString()
      ) || []
    );
  }, []);

  const cleanData = () => {
    setFieldValue("cod_vehiculo", null);
    setFieldValue("desc_vehiculo", "");
    setFieldValue("cod_acoplado", null);
    setFieldValue("desc_acoplado", "");
  };

  // detalle de las patentes de cada vehículo
  const getDetailCard = useCallback((data) => {
    const marca = data?.desc_marca || "";
    const modelo = data?.desc_modelo || "";
    const tipo = data?.desc_tipo_vehiculo || "";
    const detail = `${tipo} ${marca} ${modelo}`;

    return (
      <Chip size="sm" color="primary" variant="dot">
        {detail}
      </Chip>
    );
  }, []);

  useEffect(() => {
    if (values.cod_transportista !== null) {
      cleanData();
      updateFilterData({
        cars: getFilterData(dataCars, values),
        coupled: getFilterData(dataCoupled, values),
      });
    }
  }, [values.cod_transportista]);

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

      {/* transportista */}
      <div className="flex gap-4">
        <SelectComponent
          arrayDataForSelect={dataTaxpayers}
          nameCodDataInArray={"cod_contribuyente"}
          nameDescDataInArray={"desc_contribuyente"}
          nameCodDataInContext={"cod_transportista"}
          name={"cod_transportista"}
          setFieldValue={setFieldValue}
          label={"Transportista"}
          isRequired={true}
          isInvalid={
            touched.cod_transportista && errors.cod_transportista ? true : false
          }
          errorMessage={touched.cod_transportista && errors.cod_transportista}
          loadForCod={values.cod_transportista}
        />
      </div>

      {/* patente, acoplado y chofer */}
      <div className="flex gap-4">
        {/* patente */}
        <div className="w-1/2">
          <SelectComponent
            arrayDataForSelect={filterData.cars}
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
            description={true}
            customDescriptionProps={getDetailCard}
          />
        </div>

        {/* acoplado */}
        <div className="w-1/2">
          <SelectComponent
            arrayDataForSelect={filterData.coupled}
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
            description={true}
            customDescriptionProps={getDetailCard}
          />
        </div>
      </div>
      {/* chofer */}
      <div className="w-full">
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
