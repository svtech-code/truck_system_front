import useTaxpayer from "../../hooks/useTaxpayer";
import ActionButton from "../ActionButton";
import SelectComponent from "../SelectComponent";

export const Taxpayer_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const { data, updateTaxpayerData } = useTaxpayer();

  const stateTaxpayer = [
    {
      cod_state_taxpayer: 1,
      desc_state_taxpayer: "ACTIVO",
    },
    {
      cod_state_taxpayer: 2,
      desc_state_taxpayer: "INACTIVO",
    },
    {
      cod_state_taxpayer: 3,
      desc_state_taxpayer: "BLOQUEADO",
    },
  ];

  return [
    {
      name: "RUN",
      selector: (row) => row.run_contribuyente,
      maxWidth: "10rem",
    },
    {
      name: "Nombres",
      selector: (row) => row.nombre_contribuyente,
      maxWidth: "20rem",
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
      name: "Estado",
      cell: (row) => (
        <SelectComponent
          arrayDataForSelect={stateTaxpayer}
          nameCodDataInArray={"cod_state_taxpayer"}
          nameDescDataInArray={"desc_state_taxpayer"}
          nameCodDataInContext={"estado_contribuyente"}
          loadForCod={row.estado_contribuyente}
          codPrimaryDataContext={row.cod_contribuyente}
          nameCodPrimaryDataContext={"cod_contribuyente"}
          arrayContextData={data}
          nameDataContext={"data"}
          updateContextData={updateTaxpayerData}
          arrayRowDataTable={row}
          placeholder
        />
      ),
    },
    {
      name: "Comuna",
      selector: (row) => row.desc_comuna,
      hide: "md",
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
          updateStateComponent={updateTaxpayerData}
          dataKey={"data"}
        />
      ),
    },
  ];
};
