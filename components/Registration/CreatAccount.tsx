import Button from "@ui/Button";
import SelectField from "@ui/SelectField";
import Heading from "@ui/Heading";
import TextField from "@ui/TextField";
import React from "react";
import { useRegistrationStore } from "stores/registration";
import * as yup from "yup";
import { countries } from "constants/countries";
import { useFormik } from "formik";
import PhoneField from "@ui/PhoneField";
type Props = {};

const fields = [
  {
    type: "text",
    label: "full name*",
    name: "fullName",
    placeholder: "Ex. John Deo",
    inputType: "text",
  },
  {
    type: "country",
    label: "country*",
    name: "country",
    placeholder: "Choose from list",
    options: countries,
  },
  {
    type: "text",
    label: "email address*",
    name: "email",
    placeholder: "Example@gmail.com",
    inputType: "email",
  },
  {
    type: "phone",
    label: "telephone number*",
    name: "phoneNumber",
    placeholder: "Ex: +9725528866442",
  },
  {
    type: "text",
    label: "password*",
    name: "password",
    placeholder: "Min. 6 characters",
    inputType: "password",
  },
  {
    type: "text",
    label: "confirm password*",
    name: "passwordConfirmation",
    placeholder: "******",
    inputType: "password",
  },
] as const;

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  password: yup.string().required("Password is required").min(6),
  phoneNumber: yup.string().required("Phone number is required"),
  country: yup.string().required("Country is required"),
  passwordConfirmation: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
});

const CreateAccount = (props: Props) => {
  const initialValues = useRegistrationStore((state) => state.accountDetails);
  const stepForward = useRegistrationStore((state) => state.stepForward);
  const formik = useFormik({
    validationSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      stepForward();
    },
  });

  return (
    <div>
      <Heading type="Heading 02">Create Account</Heading>
      <form className="mt-6 grid gap-y-4" onSubmit={formik.handleSubmit}>
        {fields.map((field) => {
          if (field.type === "country") {
            return (
              <SelectField
                isClearable
                label={field.label}
                key={field.name}
                options={field.options}
                name={field.name}
                inputId={field.name}
                onBlur={() => {
                  formik.setFieldTouched(field.name, true);
                }}
                value={
                  (field.options
                    ? field.options.find(
                        (option) => option.value === formik.values[field.name]
                      )
                    : "") as any
                }
                onChange={(option: any) => {
                  formik.setFieldValue(field.name, option ? option.value : "");
                }}
                touched={formik.touched[field.name]}
                error={formik.errors[field.name]}
                placeholder={field.placeholder}
              />
            );
          }

          if (field.type === "phone")
            return (
              <PhoneField
                key={field.name}
                onBlur={() => {
                  formik.setFieldTouched(field.name);
                }}
                onChange={(val) => {
                  formik.setFieldValue(field.name, val);
                }}
                value={formik.values[field.name]}
                label={field.label}
                error={formik.errors[field.name]}
                touched={formik.touched[field.name]}
                country="us"
                placeholder={field.placeholder}
              />
            );

          return (
            <TextField
              key={field.name}
              name={field.name}
              id={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name]}
              className="w-full"
              label={field.label}
              error={formik.errors[field.name]}
              touched={formik.touched[field.name]}
              type={field.inputType}
              placeholder={field.placeholder}
            />
          );
        })}
        <Button className="h-[56px]" type="submit">
          Next Step {">"}
        </Button>
      </form>
    </div>
  );
};

export default CreateAccount;
