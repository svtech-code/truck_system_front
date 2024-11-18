import { Checkbox, Input } from "@nextui-org/react";

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
      <div className="w-full">
        <Input
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

      <div className="w-full flex justify-around items-center flex-wrap gap-3">
        <Checkbox
          name="requiere_chofer"
          isSelected={values.requiere_chofer}
          onChange={() =>
            setFieldValue("requiere_chofer", !values.requiere_chofer)
          }
        >
          Requiere chofer
        </Checkbox>

        <Checkbox
          name="requiere_pioneta"
          isSelected={values.requiere_pioneta}
          onChange={() =>
            setFieldValue("requiere_pioneta", !values.requiere_pioneta)
          }
        >
          Requiere pioneta
        </Checkbox>

        <Checkbox
          name="permite_acoplado"
          isSelected={values.permite_acoplado}
          onChange={() =>
            setFieldValue("permite_acoplado", !values.permite_acoplado)
          }
        >
          Permite acoplado
        </Checkbox>
      </div>
    </>
  );
};

export default VehicleType_form;
