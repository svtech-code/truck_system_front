import { Input } from "@nextui-org/react";

const VehicleType_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  return (
    <>
      <div>
        <Input
          className="w-1/3"
          color={
            touched.desc_tipo_vehiculo && errors.desc_tipo_vehiculo
              ? "danger"
              : "primary"
          }
          name="desc_tipo_vehiculo"
          type="text"
          label="Tipo de vehiculo"
          labelPlacement="outside"
          variant="faded"
          value={
            values.desc_tipo_vehiculo
              ? values.desc_tipo_vehiculo.toUpperCase()
              : ""
          }
          ref={inputRef}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("desc_tipo_vehiculo", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.desc_tipo_vehiculo && errors.desc_tipo_vehiculo}
          errorMessage={touched.desc_tipo_vehiculo && errors.desc_tipo_vehiculo}
        />
      </div>
    </>
  );
};

export default VehicleType_form;
