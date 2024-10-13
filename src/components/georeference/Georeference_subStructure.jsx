import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const Georeference_subStructure = ({ data }) => {
  const { desc_georeferencia, latitud, longitud } = data;

  return (
    <Table
      aria-label="sub tabla datos de georeferencias"
      className="p-2"
      selectionMode="single"
      classNames={{
        wrapper: "bg-gray-300",
        th: "font-bold text-[.8rem]",
      }}
    >
      <TableHeader>
        <TableColumn className="w-[80%]">Descripción georeferencia</TableColumn>
        <TableColumn className="w-[10%]">Latitud</TableColumn>
        <TableColumn className="w-[10%]">Longitud</TableColumn>
      </TableHeader>

      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key="1">
          <TableCell>{desc_georeferencia}</TableCell>
          <TableCell>{latitud}</TableCell>
          <TableCell>{longitud}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Georeference_subStructure;
