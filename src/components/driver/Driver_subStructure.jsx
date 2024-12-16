import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const Driver_subStructure = ({ data }) => {
  const { email, telefono1, telefono2, username } = data;

  return (
    <div className="border-gray-300 border-2 p-1 mt-1 mb-2 rounded-2xl overflow-hidden flex flex-col gap-y-4">
      <Table
        aria-label="sub tabla datos de choferes"
        selectionMode="single"
        classNames={{
          wrapper: "bg-gray-300 p-2",
          th: "font-bold text-[.8rem] bg-gray-100",
        }}
      >
        <TableHeader>
          <TableColumn className="w-[40%]">Correo electrónico</TableColumn>
          <TableColumn className="w-[20%]">Teléfono 1</TableColumn>
          <TableColumn className="w-[20%]">Teléfono 2</TableColumn>
          <TableColumn className="w-[20%]">Nombre usuario</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"Sin datos asignados"}>
          <TableRow key={"1"}>
            <TableCell>{email}</TableCell>
            <TableCell>{telefono1}</TableCell>
            <TableCell>{telefono2}</TableCell>
            <TableCell>{username}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Driver_subStructure;
