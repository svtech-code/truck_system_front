import { Chip, Input, useDisclosure, useTable } from "@nextui-org/react";
import Select_Component_load from "../Select_Component_load";
import useVehicle from "../../hooks/useVehicle";
import { useCallback, useEffect, useMemo, useState } from "react";

import VehicleModel_form from "../vehicleModel/VehicleModel_form";
import usePostModel from "../../hooks/usePostModel";
import initialValues_model from "../../utils/initialValues/modelValues";
import modelValidation from "../../validations/modelValidation";
import SubModalBase from "../../templates/SubModalBase";
import SelectComponent from "../SelectComponent";
import { FaCar } from "react-icons/fa";

const Vehicle_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  const {
    data,
    modelVehicle,
    typeVehicle,
    drivers,
    carriers,
    mainAcopladoData,
    brandVehicle,
    updateVehicleData,
  } = useVehicle();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [dataModel, setDataModel] = useState(null);
  const [disableSelect, setDisableSelect] = useState(true);

  const [backupData, setBackupData] = useState({
    dataCodChofer: null,
    dataCodAcoplado: null,
    dataDescChofer: "",
    dataDescAcoplado: "",
  });

  const backupCodChofer = useMemo(() => {
    return backupData.dataCodChofer;
  }, [backupData.dataCodChofer]);

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
  const handleFieldValue = useCallback((name, value) => {
    if (value === "__new__") {
      onOpen();
      setFieldValue(name, null);
    } else {
      setFieldValue(name, value);
    }
  }, []);

  // filtro de los carros en uso
  const carsInUse = useCallback((data) => {
    const stateCar = data?.estado ? "En uso" : "Disponible";
    return (
      <Chip size="sm" isDisabled={data?.estado} color="primary">
        {stateCar}
      </Chip>
    );
  }, []);

  // variable que obtiene los carros en uso para pasarlos como array al select y que aparescan deshabilitados
  const disableCarsInUse = mainAcopladoData
    .filter((acoplado) => acoplado.estado === true)
    .map((acoplado) => acoplado.cod_vehiculo.toString());

  // obtención de los tipos de vehículos
  const getTypeVehicle =
    typeVehicle.filter(
      (item) => item.cod_tipo_vehiculo.toString() === values?.cod_tipo_vehiculo
    ) || [];

  const clearData = () => {
    // limpieza de los campos
    setFieldValue("cod_chofer", null);
    setFieldValue("cod_acoplado", null);
    setFieldValue("desc_chofer", "");
    setFieldValue("desc_acoplado", "");
  };

  const backupDataProperties = () => {
    // respaldo de los datos
    setBackupData({
      dataCodChofer: values.cod_chofer,
      dataCodAcoplado: values.cod_acoplado,
      dataDescChofer: values.desc_chofer,
      dataDescAcoplado: values.desc_acoplado,
    });
  };

  const restoreData = () => {
    // restauración de los datos
    setFieldValue("cod_chofer", backupData.dataCodChofer);
    setFieldValue("cod_acoplado", backupData.dataCodAcoplado);
    setFieldValue("desc_chofer", backupData.dataDescChofer);
    setFieldValue("desc_acoplado", backupData.dataDescAcoplado);
  };

  useEffect(() => {
    if (values.cod_vehiculo === null) {
      if (getTypeVehicle[0]?.permite_acoplado) {
        setDisableSelect(false);
      } else {
        setDisableSelect(true);
        clearData();
      }
    }

    if (values.cod_vehiculo !== null) {
      if (getTypeVehicle[0]?.permite_acoplado) {
        setDisableSelect(false);
        restoreData();
      } else {
        setDisableSelect(true);
        backupDataProperties();
        clearData();
      }
    }
  }, [values.cod_tipo_vehiculo, backupCodChofer]);

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
          value={
            values.patente_completa ? values.patente_completa.toUpperCase() : ""
          }
          ref={inputRef}
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
          value={values.anio || ""}
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
          value={values.cantidad_kilos || ""}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.cantidad_kilos && errors.cantidad_kilos}
          errorMessage={touched.cantidad_kilos && errors.cantidad_kilos}
          className="w-full xxs:w-[8rem]"
        />

        <div className="hidden xs:flex justify-center items-center pl-10 ">
          <FaCar size={80} />
        </div>
      </div>

      {/* select tipoVehiculo y modelo */}
      <div className="flex flex-col sm:flex-row gap-4">
        <SelectComponent
          arrayDataForSelect={typeVehicle}
          nameCodDataInArray={"cod_tipo_vehiculo"}
          nameDescDataInArray={"desc_tipo_vehiculo"}
          nameCodDataInContext={"cod_tipo_vehiculo"}
          name={"cod_tipo_vehiculo"}
          setFieldValue={setFieldValue}
          label={"Tipo vehículo"}
          isRequired={true}
          isInvalid={
            touched.cod_tipo_vehiculo && errors.cod_tipo_vehiculo ? true : false
          }
          errorMessage={touched.cod_tipo_vehiculo && errors.cod_tipo_vehiculo}
          loadForDesc={values.desc_tipo_vehiculo}
        />

        {/* ver como trabajar la carga de un submodal con más de un dato compuesto */}
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
          updateVehicleData={updateVehicleData}
          modelVehicle={modelVehicle}
          brandVehicle={brandVehicle}
          dataModel={dataModel}
        />
      </div>

      {/* input fechas de vencimiento */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
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

      {/* input descripción */}
      <div className="flex w-full">
        <Input
          color={
            touched.desc_vehiculo && errors.desc_vehiculo ? "danger" : "primary"
          }
          name="desc_vehiculo"
          type="text"
          label="Descripción"
          labelPlacement="outside"
          variant="faded"
          value={values.desc_vehiculo ? values.desc_vehiculo.toUpperCase() : ""}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("desc_vehiculo", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.desc_vehiculo && errors.desc_vehiculo}
          errorMessage={touched.desc_vehiculo && errors.desc_vehiculo}
        />
      </div>

      {/* select contribuyente */}
      <div className="flex w-full">
        <SelectComponent
          arrayDataForSelect={carriers}
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

      {/* Select chofer y acoplado */}
      <div className="flex flex-col sm:flex-row gap-4">
        <SelectComponent
          arrayDataForSelect={drivers}
          nameCodDataInArray={"cod_usuario"}
          nameDescDataInArray={"desc_usuario"}
          nameCodDataInContext={"cod_chofer"}
          name={"cod_chofer"}
          setFieldValue={setFieldValue}
          label={"Chofer"}
          isRequired={!disableSelect}
          isInvalid={touched.cod_chofer && errors.cod_chofer ? true : false}
          errorMessage={touched.cod_chofer && errors.cod_chofer}
          disabledSelect={disableSelect}
          loadForCod={values.cod_chofer}
        />

        <div className="w-full sm:w-[20rem]">
          <SelectComponent
            arrayDataForSelect={mainAcopladoData}
            nameCodDataInArray={"cod_vehiculo"}
            nameDescDataInArray={"patente"}
            nameCodDataInContext={"cod_acoplado"}
            name={"cod_acoplado"}
            setFieldValue={setFieldValue}
            label={"Acoplado"}
            isInvalid={
              touched.cod_acoplado && errors.cod_acoplado ? true : false
            }
            errorMessage={touched.cod_acoplado && errors.cod_acoplado}
            loadForCod={values.cod_acoplado}
            disabledSelect={disableSelect}
            description={true}
            customDescriptionProps={carsInUse}
            disableKeysItems={disableCarsInUse}
          />
        </div>
      </div>

      {/* modal para crear un sub dato */}
      <SubModalBase
        propertyId={"desc_modelo"}
        title={"Modelo de Vehículo"}
        size={"xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        useSubmit_generic={usePostModel({
          subAdd: true,
          modelVehicle,
          setDataModel,
        })}
        initialValues_generic={initialValues_model}
        validationSchema_generic={modelValidation}
        Form_generic={(props) => (
          <VehicleModel_form {...props} data={brandVehicle} />
        )}
      />
    </>
  );
};
export default Vehicle_form;
