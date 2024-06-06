import { Chip, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getData } from "../api/apiGet";

// trabajar el estilo mediante objetos

const Select_Component = ({
  route,
  label,
  itemKey, // necesario
  detail, // necesario
  name, // necesario nombre del elemento
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
  const [list, setList] = useState([]);
  const [isDataLoader, setIsDataLoader] = useState(false);

  useEffect(() => {
    const handlerLoad = async () => {
      if (!isDataLoader) {
        const { response } = await getData({ endPoint: route });
        setList(response);
        setIsDataLoader(true);
      }
    };

    handlerLoad();

    if (reload && reload.length > 0)
      setList((prevList) => [...prevList, ...reload]);
  }, [reload]);

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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        isRequired={required}
        isLoading={!isDataLoader}
        isInvalid={!!isError}
      >
        {list.map((item) => (
          <SelectItem key={item[itemKey]} value={item[itemKey]}>
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

export default Select_Component;
