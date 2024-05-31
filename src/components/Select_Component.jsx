import { Select, SelectItem } from "@nextui-org/react";

const Select_Component = ({ object }) => {
  return (
    <>
      <Select
        arial-label
        placeholder="-------"
        size="md"
        variant="faded"
        color="success"
      >
        {object.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default Select_Component;
