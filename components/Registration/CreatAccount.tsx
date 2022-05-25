import SelectField from "@ui/SelectField";
import Heading from "@ui/Heading";
import TextField from "@ui/TextField";
import React from "react";
import { useRegistrationStore } from "stores/registration";
import * as yup from "yup";
import { countries } from "constants/countries";
import { useFormik } from "formik";
import PhoneField from "@ui/PhoneField";
import { useCheckEmail } from "features/users/mutations";
import { asyncCatch } from "@utils/index";
import StepActions from "./StepActions";

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

const CreateAccount = () => {
  const { mutateAsync: checkEmail } = useCheckEmail();
  const initialValues = useRegistrationStore((state) => state.accountDetails);
  const stepForward = useRegistrationStore((state) => state.stepForward);
  const setAccountDetails = useRegistrationStore(
    (state) => state.setAccountDetails
  );
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values, helpers) => {
      // validate email
      const [err] = await asyncCatch(checkEmail(values.email));
      if (err) return helpers.setFieldError("email", "Email is already taken");
      setAccountDetails(values);
      stepForward();
    },
  });

  return (
    <div>
      <form className="mt-6 grid gap-y-4" onSubmit={formik.handleSubmit}>
        <div className="register-step__fields">
          <TextField
            label="FULL NAME*"
            name="fullName"
            id="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full"
            error={formik.errors.fullName}
            touched={formik.touched.fullName}
            placeholder="Ex. John Doe"
          />
          <SelectField
            label="Country*"
            options={countries}
            name="Country"
            inputId="Country"
            value={
              (countries
                ? countries.find(
                    (option) => option.value === formik.values.country
                  )
                : null) as any
            }
            onChange={(option: any) => {
              formik.setFieldValue("country", option ? option.value : "", true);
            }}
            blurInputOnSelect
            touched={formik.touched.country}
            error={formik.errors.country}
            placeholder="Choose from list..."
          />
          <TextField
            label="EMAIL*"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full"
            error={formik.errors.email}
            touched={formik.touched.email}
            placeholder="email@email.com"
          />
          <PhoneField
            onBlur={() => {
              formik.setFieldTouched("phoneNumber");
            }}
            onChange={(val) => {
              formik.setFieldValue("phoneNumber", val);
            }}
            value={formik.values["phoneNumber"]}
            label="Phone Number*"
            error={formik.errors["phoneNumber"]}
            touched={formik.touched["phoneNumber"]}
            country="us"
            placeholder="+972525677444"
          />
          <TextField
            type="password"
            label="PASSWORD*"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full"
            error={formik.errors.password}
            touched={formik.touched.password}
            placeholder="Min 6 characters"
          />
          <TextField
            type="password"
            label="CONFIRM PASSWORD*"
            name="passwordConfirmation"
            id="passwordConfirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
            className="w-full"
            error={formik.errors.passwordConfirmation}
            touched={formik.touched.passwordConfirmation}
            placeholder="******"
          />
        </div>
        <StepActions withBack={false} />
      </form>
    </div>
  );
};

export default CreateAccount;
