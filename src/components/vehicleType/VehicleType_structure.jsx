import { Chip } from "@nextui-org/react";
import useVehicleType from "../../hooks/useVehicleType";
import ActionButton from "../ActionButton";

export const VehicleType_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const { data, updateVehicleTypeData } = useVehicleType();

  const cardAceptation = ({ row, require, data }) => {
    const requireAcept = require ? "requiere" : "acepta";
    const text = row
      ? `Si ${requireAcept} ${data}`
      : `No ${requireAcept} ${data}`;

    return (
      <Chip radius="md" color={`${row ? "success" : "danger"}`} variant="dot">
        {text}
      </Chip>
    );
  };

  return [
    {
      name: "Tipo de vehículo",
      selector: (row) => row.desc_tipo_vehiculo,
      grow: 1,
    },
    {
      name: "Requiere chofer",
      width: "250px",
      cell: (row) =>
        cardAceptation({
          row: row.requiere_chofer,
          data: "chofer",
          require: true,
        }),
    },
    {
      name: "Requiere pioneta",
      width: "250px",
      cell: (row) =>
        cardAceptation({
          row: row.requiere_pioneta,
          data: "pioneta",
          require: true,
        }),
    },
    {
      name: "Permite acoplado",
      width: "250px",
      cell: (row) =>
        cardAceptation({
          row: row.permite_acoplado,
          data: "acoplado",
          require: false,
        }),
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
          updateStateComponent={updateVehicleTypeData}
          dataKey={"data"}
        />
      ),
    },
  ];
};

export default VehicleType_structure;
