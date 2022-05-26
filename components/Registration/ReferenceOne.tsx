import SelectField from "@ui/SelectField";
import TextField from "@ui/TextField";
import React from "react";
import { useRegistrationStore } from "stores/registration";
import * as yup from "yup";
import { countries } from "constants/countries";
import { useFormik } from "formik";
import StepActions from "./StepActions";

const validationSchema = yup.object().shape({
  refCompanyName: yup.string().required("Company name is required"),
  refCompanyEmail: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  refCompanyContact: yup.string().required("Contact name is required"),
  refCountry: yup.string().required("Country is required"),
});

const ReferenceOne = () => {
  const initialValues = useRegistrationStore((state) => state.referenceOne);
  const stepForward = useRegistrationStore((state) => state.stepForward);
  const stepBackward = useRegistrationStore((state) => state.stepBackward);
  const setReferenceOne = useRegistrationStore(
    (state) => state.setReferenceOne
  );

  const formik = useFormik({
    validationSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      setReferenceOne(values);
      stepForward();
    },
  });

  return (
    <div>
      <form className="mt-6 grid gap-y-4" onSubmit={formik.handleSubmit}>
        <div className="register-step__fields">
          <TextField
            label="Company Name*"
            name="refCompanyName"
            id="refCompanyName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.refCompanyName}
            className="w-full"
            error={formik.errors.refCompanyName}
            touched={formik.touched.refCompanyName}
            placeholder="Ex. Lucy"
          />
          <SelectField
            label="Company Country*"
            options={countries}
            name="refCountry"
            inputId="refCountry"
            value={
              (countries
                ? countries.find(
                    (option) => option.value === formik.values.refCountry
                  )
                : null) as any
            }
            onChange={(option: any) => {
              formik.setFieldValue(
                "refCountry",
                option ? option.value : "",
                true
              );
            }}
            blurInputOnSelect
            touched={formik.touched.refCountry}
            error={formik.errors.refCountry}
            placeholder="Choose from list..."
          />
          <TextField
            label="Contact Person*"
            name="refCompanyContact"
            id="refCompanyContact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.refCompanyContact}
            className="w-full"
            error={formik.errors.refCompanyContact}
            touched={formik.touched.refCompanyContact}
            placeholder="Ex. John Doe"
          />
          <TextField
            type="email"
            label="Contact Email*"
            name="refCompanyEmail"
            id="refCompanyEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.refCompanyEmail}
            className="w-full"
            error={formik.errors.refCompanyEmail}
            touched={formik.touched.refCompanyEmail}
            placeholder="email@email.com"
          />
        </div>
        <StepActions onBack={stepBackward} />
      </form>
    </div>
  );
};

export default ReferenceOne;
