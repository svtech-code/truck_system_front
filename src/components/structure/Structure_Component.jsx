import ActionButton from "../ActionButton";

const Structure_Component = ({
  data, // array con datos de la tabla
  titleColum, // titulo de la columna de la tabla
  onOpen, // función open del modal
  route, // ruta del endpoint del mantenedor
  propertyId, // nombre de la propiedad que almacena el id
  propertyName, // nombre de la propiedad que almacena el nombre
  updateStateComponent, // actualizador de los estados del mantenedor
}) => {
  return [
    {
      name: titleColum,
      selector: (row) => row[propertyName],
      grow: 1,
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => (
        <ActionButton
          data={data}
          row={row}
          onOpen={onOpen}
          route={route}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={updateStateComponent}
          dataKey={"data"}
        />
      ),
    },
  ];
};

export default Structure_Component;
