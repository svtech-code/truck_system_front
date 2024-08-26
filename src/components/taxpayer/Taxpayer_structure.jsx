import useTaxpayer from "../../hooks/useTaxpayer";
import ActionButton from "../ActionButton";

export const Taxpayer_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const { data, updateTaxpayerData } = useTaxpayer();
  return [
    {
      name: "RUN",
      selector: (row) => row.run_contribuyente,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre_contribuyente,
    },
    {
      name: "Paterno",
      selector: (row) => row.apellido_paterno_contribuyente,
    },
    {
      name: "Materno",
      selector: (row) => row.apellido_materno_contribuyente,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion_contribuyente,
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
          updateStateComponent={updateTaxpayerData}
          dataKey={"data"}
        />
      ),
    },
  ];
};
