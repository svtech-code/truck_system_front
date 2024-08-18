import { Input } from "@nextui-org/react";
import Select_Component_load from "../Select_Component_load";
import { useEffect } from "react";

const VehicleModel_form = ({
  values,
  setFieldValue,
  handleBlur,
  touched,
  errors,
  inputRef,
  data,
}) => {
  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input
        color={touched.desc_modelo && errors.desc_modelo ? "danger" : "primary"}
        name="desc_modelo"
        type="text"
        label="Modelo"
        labelPlacement="outside"
        variant="faded"
        value={values.desc_modelo}
        ref={inputRef}
        isRequired={true}
        onChange={(e) =>
          setFieldValue("desc_modelo", e.target.value.toUpperCase())
        }
        onBlur={handleBlur}
        isInvalid={touched.desc_modelo && errors.desc_modelo}
        errorMessage={touched.desc_modelo && errors.desc_modelo}
      />

      <Select_Component_load
        dataList={data}
        name={"desc_marca"}
        label={"Marca asociada"}
        itemKey={"cod_marca"}
        detail={"desc_marca"}
        value={values.desc_marca}
        setFieldValue={setFieldValue}
        handleBlur={handleBlur}
        touched={touched}
        errors={errors}
        required={true}
      />
    </div>
  );
};

export default VehicleModel_form;
