import ActionButton from "../ActionButton";

const Structure_Component = ({
  titleColum,
  onOpen,
  propertyId,
  propertyName,
  updateStateComponent,
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
          row={row}
          onOpen={onOpen}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={updateStateComponent}
        />
      ),
    },
  ];
};

export default Structure_Component;
