import { Select, SelectItem } from "@nextui-org/react";

const choferes = [
  {
    id: "1",
    nombre: "Manuel Troncoso",
  },
  {
    id: "2",
    nombre: "Fernando Godoy",
  },
  {
    id: "3",
    nombre: "Hector Sepulveda",
  },
];

const Vehicle_selectChofer = () => {
  return (
    <>
      <Select
        aria-label
        placeholder="-------"
        size="md"
        variant="faded"
        color="success"
        // selectedKeys={} // para preseleccion de chofer
        // onSelectionChange={(e) => handleSelected(e.currentKey)} // para validar privilegios antes de la seleccion
      >
        {choferes.map(({ id, nombre }) => (
          <SelectItem key={id} value={id}>
            {nombre}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default Vehicle_selectChofer;
