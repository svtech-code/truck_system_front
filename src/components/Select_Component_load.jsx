import { Chip, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { list } from "postcss";
import { useCallback, useEffect, useState } from "react";

const Select_Component_load = ({
  dataList,
  name,
  label,
  itemKey,
  detail,
  value,
  setFieldValue,
  handleBlur,
  touched,
  errors,
  required,
  subDetail, // valor para manejar la carga compuesta de modelo y marca
  allowNew, // valor para manejar la opción de agregar nuevo dato al select
  valueForUpdate,
  dataModel,
}) => {
  // estados para trabajar con el select
  const [stateSelect, setStateSelect] = useState({
    list: dataList || [],
    isDataLoader: !!dataList,
    selectedItem: "",
  });

  // actualizador de los estados
  const updateStateSelect = useCallback((newState) => {
    setStateSelect((prevState) => ({ ...prevState, ...newState }));
  }, []);

  // función para manejar la carga de datos del select
  const updateSelectData = useCallback((responseList, idData) => {
    const selected = responseList.find(
      (item) => item[idData ? idData : detail] === value
    );
    const selectedValue = selected ? selected[itemKey].toString() : "";
    updateStateSelect({ selectedItem: selectedValue });
    setFieldValue(name, selectedValue);
  }, []);

  useEffect(() => {
    if (dataModel && name === "desc_modelo")
      updateStateSelect({ list: dataModel, selectedItem: "" });
  }, [dataModel]);

  useEffect(() => {
    if (value !== "") {
      updateSelectData(dataList);

      if (
        name === "desc_modelo" &&
        value !== "__new__" &&
        value !== "" &&
        value !== null
      ) {
        const arrayModel = dataList.find((item) => item.desc_modelo === value);
        setFieldValue("cod_marca", arrayModel.cod_marca);
      }
    }

    if (name === valueForUpdate) {
      updateSelectData(dataList, itemKey);
    }
  }, []);

  const handleSelectedValue = (newValue) => {
    // console.log(newValue);
    const value = newValue ? newValue : null;
    // condicional para trabajar con modelo y marca
    if (name === "desc_modelo" && value !== "__new__") {
      const arrayModel = stateSelect.list.find(
        (item) => item.cod_modelo.toString() === value
      );
      setFieldValue("cod_marca", arrayModel.cod_marca);
    }

    updateStateSelect({ selectedItem: value });
    setFieldValue(name, value);
  };

  const isError = touched[name] && errors[name];

  return (
    <div className="w-full">
      <Select
        name={name}
        arial-label={label}
        label={label}
        labelPlacement="outside"
        size="md"
        variant="faded"
        color={isError ? "error" : "primary"}
        selectedKeys={
          stateSelect.selectedItem ? [stateSelect.selectedItem] : []
        }
        onSelectionChange={(key) => handleSelectedValue(key.currentKey)}
        onBlur={handleBlur}
        isRequired={required}
        isLoading={!stateSelect.isDataLoader}
        isInvalid={!!isError}
      >
        {stateSelect.list.map((item) => (
          <SelectItem key={item[itemKey]}>
            {subDetail ? `${item[detail]} - ${item[subDetail]}` : item[detail]}
          </SelectItem>
        ))}
        {allowNew && <SelectItem key="__new__">Agregar Nuevo</SelectItem>}
      </Select>
      {isError && (
        <Chip color="danger" variant="light">
          {errors[name]}
        </Chip>
      )}
    </div>
  );
};

export default Select_Component_load;
