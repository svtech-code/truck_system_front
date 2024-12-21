import { Chip, Input } from "@nextui-org/react";
import SelectComponent from "../SelectComponent";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import { useCallback, useEffect, useState } from "react";
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
  const {
    dataCars,
    dataCoupled,
    dataDriver,
    dataCarriers,
  } = useLoadingOrder();

  const [filterData, setFilterData] = useState({
    cars: dataCars || [],
    coupled: dataCoupled || [],
    filterControlByEdition: values.cod_orden_carga !== null ? true : false,
  });

  // función para limpieza de datos dependientes
  const cleanDependentField = (fields) => {
    fields.forEach((field) => setFieldValue(field, null));
  };

  const applyFilterTransportista = useCallback(() => {
    const filteredCars = dataCars.filter((car) =>
      car.cod_transportista?.toString() === values.cod_transportista?.toString()
    );

    const filteredCoupled = dataCoupled.filter((coupled) =>
      coupled.cod_transportista?.toString() === values.cod_transportista?.toString()
    );


    // validación para evitar limpiar los valores al tener seleccionada la patente
    const shouldClenaField = !values.cod_vehiculo && !values.cod_acoplado && !values.cod_chofer

    // validación del filtro que se aplcia
    if (values.cod_transportista !== null) {
      setFilterData({ ...filterData, cars: filteredCars, coupled: filteredCoupled });

      if (shouldClenaField)
        cleanDependentField(["cod_vehiculo", "cod_acoplado", "cod_chofer"]);

    } else {
      setFilterData({ ...filterData, cars: dataCars, coupled: dataCoupled });
      cleanDependentField(["cod_vehiculo", "cod_acoplado", "cod_chofer"]);

    }

  }, [values.cod_transportista, dataCars, dataCoupled])

  const getDataOfVehicle = useCallback(() => {
    const selectedCar = dataCars.find(
      car => car.cod_vehiculo.toString() === values.cod_vehiculo.toString()
    );

    if (selectedCar) {
      setFieldValue("cod_acoplado", selectedCar.cod_acoplado);
      setFieldValue("cod_chofer", selectedCar.cod_chofer);

      if (values.cod_transportista === null) {
        setFieldValue("cod_transportista", selectedCar.cod_transportista);
      }
    }
  }, [values.cod_vehiculo, dataCars, dataCoupled])



  useEffect(() => {
    if (filterData.filterControlByEdition === false) {
      if (values.cod_transportista !== null) {
        applyFilterTransportista();

      } else if (values.cod_transportista === null) {
        applyFilterTransportista();

      }
    }

  }, [values.cod_transportista])


  useEffect(() => {
    if (filterData.filterControlByEdition === false) {
      if (values.cod_vehiculo !== null) {
        getDataOfVehicle()

      } else if (values.cod_vehiculo === null) {
        cleanDependentField(["cod_acoplado", "cod_chofer"]);

      }
    }

  }, [values.cod_vehiculo])


  useEffect(() => {
    setFilterData({ ...filterData, filterControlByEdition: false })
  }, [])


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
          arrayDataForSelect={dataCarriers}
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
          name={"cod_chofer"}
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
      />

      {touched.detalles_orden_carga && errors.detalles_orden_carga && (
        <div className="w-full flex justify-center items-center">
          <span className="text-red-600 bg-red-200 p-2 rounded-md">
            errors.detalles_orden_carga
          </span>
        </div>
      )}
    </>
  );
};

export default LoadingOrder_form;
