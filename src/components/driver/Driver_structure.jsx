import useDriver from "../../hooks/useDriver";
import ActionButton from "../ActionButton";

const Driver_structure = ({ onOpen, route, propertyId, propertyName }) => {
  const { data, updateDriverData } = useDriver();
  // función para agregar guion medio al rut no formateado
  const agregarGuion = (str) => str.slice(0, -1) + "-" + str.slice(-1);

  return [
    {
      name: "RUN",
      selector: (row) => agregarGuion(row.run_usuario),
    },
    {
      name: "Paterno",
      selector: (row) => row.apellido_paterno,
    },
    {
      name: "Materno",
      selector: (row) => row.apellido_materno,
    },
    {
      name: "Nombres",
      selector: (row) => row.nombres_usuario,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion_usuario,
    },
    {
      name: "Acciones",
      center: true,
      cell: (row) => (
        <ActionButton
          data={data}
          row={row}
          onOpen={onOpen}
          route={route}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={updateDriverData}
          dataKey={"data"}
        />
      ),
    },
  ];
};

export default Driver_structure;
