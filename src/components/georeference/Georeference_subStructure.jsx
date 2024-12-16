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
    <div className="border-gray-300 border-2 p-1 mt-1 mb-2 rounded-2xl overflow-hidden flex flex-col gap-y-4">
      <Table
        aria-label="sub tabla datos de georeferencias"
        selectionMode="single"
        classNames={{
          wrapper: "bg-gray-300 p-2",
          th: "font-bold text-[.8rem] bg-gray-100",
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
    </div>
  );
};

export default Georeference_subStructure;
