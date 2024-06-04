import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getData } from "../api/apiGet";

// trabajar el estilo mediante objetos

const Select_Component = ({
  route,
  label,
  itemKey,
  detail,
  name,
  value,
  handleChange,
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
  }, []);

  return (
    <Select
      name={name}
      arial-label={label}
      label={label}
      labelPlacement="outside"
      size="md"
      variant="faded"
      color="primary"
      value={value}
      onChange={handleChange}
      isRequired={true}
      isLoading={!isDataLoader}
    >
      {list.map((item) => (
        <SelectItem key={item[itemKey]} value={item[itemKey]}>
          {item[detail]}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Select_Component;
