import { Select, SelectItem } from "@nextui-org/react";
import { getData } from "../api/apiGet";
import { useEffect, useState } from "react";

// trabajar el estilo mediante objetos

const Select_Component = ({ route, label }) => {
  const [stateGet, setStateGet] = useState({
    listSelect: [],
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setStateGet({ isLoading: true });
      try {
        const { response } = await getData({ endPoint: route });
        setStateGet({ listSelect: response, isLoading: false });
      } catch (error) {
        setStateGet({ error: error, isLoading: false });
      }
    };

    fetchData();
  }, []);

  console.log(stateGet.listSelect);

  // const { listSelect, error, isLoading } = stateGet;

  return (
    <>
      <Select
        arial-label
        // items={listSelect}
        // isLoading={isLoading}
        label={label}
        labelPlacement="outside"
        size="md"
        variant="faded"
        color="primary"
      >
        {/* {(item) => (
          <SelectItem key={item.cod_tipo_vehiculo}>
            {item.desc_tipo_vehiculo}
          </SelectItem>
        )} */}

        {/* {listSelect.map(({ cod_tipo_vehiculo, desc_tipo_vehiculo }) => (
          <SelectItem key={cod_tipo_vehiculo}>{desc_tipo_vehiculo}</SelectItem>
        ))} */}

        {/* {listSelect.map(({ id, description }) => (
          <SelectItem key={id} value={id}>
            {description}
          </SelectItem>
        ))} */}

        {/* {(item) => (
          <SelectItem
            key={item.cod_tipo_vehiculo}
            value={item.cod_tipo_vehiculo}
          >
            {item.desc_tipo_vehiculo}
          </SelectItem>
        )} */}
      </Select>
    </>
  );
};

export default Select_Component;
