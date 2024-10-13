import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const Driver_subStructure = ({ data }) => {
  const { email, telefono1, telefono2 } = data;

  return (
    <Table
      aria-label="sub tabla datos de choferes"
      className="p-2"
      selectionMode="single"
      classNames={{
        wrapper: "bg-gray-300",
        th: "font-bold text-[.8rem]",
      }}
    >
      <TableHeader>
        <TableColumn className="w-[60%]">Correo electrónico</TableColumn>
        <TableColumn className="w-[20%]">Teléfono 1</TableColumn>
        <TableColumn className="w-[20%]">Teléfono 2</TableColumn>
      </TableHeader>

      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key={"1"}>
          <TableCell>{email}</TableCell>
          <TableCell>{telefono1}</TableCell>
          <TableCell>{telefono2}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Driver_subStructure;
