import { Input } from "@nextui-org/react";

const FormTest = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  firstInputRef,
}) => {
  return (
    <>
      {/* input patente y año */}
      <div className="flex flex-col xs:flex-row gap-4">
        <Input
          color={
            touched.anioVehiculo && errors.anioVehiculo ? "danger" : "primary"
          }
          name="anioVehiculo"
          type="number"
          label="Año"
          labelPlacement="outside"
          variant="faded"
          value={values.anioVehiculo}
          isRequired={true}
          ref={firstInputRef}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.anioVehiculo && errors.anioVehiculo}
          errorMessage={touched.anioVehiculo && errors.anioVehiculo}
          className="w-full xxs:w-[8rem]"
        />

        <Input
          color={
            touched.capacidadKG && errors.capacidadKG ? "danger" : "primary"
          }
          name="capacidadKG"
          type="number"
          label="Tonelaje"
          labelPlacement="outside"
          variant="faded"
          value={values.capacidadKG}
          isRequired={true}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.capacidadKG && errors.capacidadKG}
          errorMessage={touched.capacidadKG && errors.capacidadKG}
          className="w-full xxs:w-[8rem]"
        />
      </div>
    </>
  );
};

export default FormTest;
