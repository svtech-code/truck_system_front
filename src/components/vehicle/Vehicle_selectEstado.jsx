import { Select, SelectItem } from "@nextui-org/react";

const estados = [
  {
    id: "1",
    estado: "DISPONIBLE",
  },
  {
    id: "2",
    estado: "EN RUTA",
  },
  {
    id: "3",
    estado: "MANTENIMIENTO",
  },
];

const Vehicle_selectEstado = () => {
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
        {estados.map(({ id, estado }) => (
          <SelectItem key={id} value={id}>
            {estado}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default Vehicle_selectEstado;
