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
      maxWidth: "8rem",
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre_contribuyente,
      maxWidth: "15rem",
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
      name: "Comuna",
      selector: (row) => row.desc_comuna,
      hide: "md",
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion_contribuyente,
      hide: "md",
    },
    {
      name: "Acciones",
      center: true,
      // maxWidth: "10rem",
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
