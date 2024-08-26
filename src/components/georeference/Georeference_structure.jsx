import useGeoreference from "../../hooks/useGeoreference";
import ActionButton from "../ActionButton";

export const Georeference_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const { data, updateGeoreferenceData } = useGeoreference();
  return [
    {
      name: "Dirección",
      selector: (row) => row.direccion,
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
          updateStateComponent={updateGeoreferenceData}
          dataKey={"data"}
        />
      ),
    },
  ];
};
