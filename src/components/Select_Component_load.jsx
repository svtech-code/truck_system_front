import { Chip, Select, SelectItem } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { getData } from "../api/apiGet";

const Select_Component_load = ({
  dataList,
  route,
  label,
  itemKey,
  detail,
  name,
  value,
  handleChange,
  handleBlur,
  touched,
  errors,
  subDetail,
  allowNew,
  reload,
  required,
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
    handleChange({
      target: {
        name,
        value: selectedValue,
      },
    });
  }, []);

  useEffect(() => {
    const handlerLoad = async () => {
      if (!stateSelect.isDataLoader && !dataList) {
        const { response } = await getData({ endPoint: route });
        updateStateSelect({ list: response, isDataLoader: true });
        if (value !== "") {
          updateSelectData(response);
        }
      }
    };

    if (name === "desc_chofer") {
      updateSelectData(dataList);
    }

    if (name === "cod_acoplado") {
      updateSelectData(dataList, itemKey);
      // console.log(value);
    }

    handlerLoad();

    if (reload && reload.length > 0) {
      updateStateSelect({ list: (prevList) => [...prevList, ...reload] });
    }
  }, [reload]);

  const handleSelectedValue = (newValue) => {
    updateStateSelect({ selectedItem: newValue });
    handleChange({
      target: {
        name,
        value: newValue,
      },
    });
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
        {allowNew && (
          <SelectItem key="__new__" value="__new__">
            Agregar Nuevo
          </SelectItem>
        )}
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
