import SelectField from "@ui/SelectField";
import TextField from "@ui/TextField";
import React from "react";
import { useRegistrationStore } from "stores/registration";
import * as yup from "yup";
import { countries } from "constants/countries";
import { useFormik } from "formik";
import { useRegister } from "features/users/mutations";
import { asyncCatch } from "@utils/index";
import FieldError from "@ui/FieldError";
import StepActions from "./StepActions";
import Loader from "@ui/Loader";

const validationSchema = yup.object().shape({
  refCompanyName: yup.string().required("Company name is required"),
  refCompanyEmail: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  refCompanyContact: yup.string().required("Contact name is required"),
  refCountry: yup.string().required("Country is required"),
});

const ReferenceTwo = () => {
  const {
    mutateAsync: register,
    isError: isErrorRegister,
    isLoading: isLoadingRegister,
  } = useRegister();
  const initialValues = useRegistrationStore((state) => state.referenceTwo);
  const stepForward = useRegistrationStore((state) => state.stepForward);
  const stepBackward = useRegistrationStore((state) => state.stepBackward);
  const accountDetails = useRegistrationStore((state) => state.accountDetails);
  const businessDetails = useRegistrationStore(
    (state) => state.businessDetails
  );
  const files = useRegistrationStore((state) => state.files);
  const referenceOne = useRegistrationStore((state) => state.referenceOne);

  const formik = useFormik({
    validationSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      const referenceTwo = values;
      const user = {
        fullName: accountDetails.fullName,
        companyName: businessDetails.companyName,
        country: accountDetails.country,
        email: accountDetails.email,
        fullAddress: "",
        isSupplier: false,
        password: accountDetails.password,
        passwordConfirmation: accountDetails.passwordConfirmation,
        phoneNumber: accountDetails.phoneNumber,
      } as const;
      const aml = {
        business: {
          businessType: businessDetails.companyType,
          companyCountry: businessDetails.companyCountry,
          companyPhone: businessDetails.companyPhone,
          companyName: businessDetails.companyName,
          companyEmailAddress: businessDetails.companyEmail,
        },
        personal: {
          personalFullName: accountDetails.fullName,
          personalPhoneNumber: accountDetails.phoneNumber,
          personalEmailAddress: accountDetails.email,
        },
        admin: {},
        bank: {},
        firstReference: {
          contactPerson: referenceOne.refCompanyContact,
          country: referenceOne.refCountry,
          email: referenceOne.refCompanyEmail,
          nameOfCompany: referenceOne.refCompanyName,
          referencesPhoneNumber: referenceOne.refPhoneNumber,
        },
        secondReference: {
          contactPerson: referenceTwo.refCompanyContact,
          country: referenceTwo.refCountry,
          email: referenceTwo.refCompanyEmail,
          nameOfCompany: referenceTwo.refCompanyName,
          referencesPhoneNumber: referenceTwo.refPhoneNumber,
        },
        thirdReference: {},
      } as const;
      const userDetails = {
        ...user,
        aml,
        files,
      } as const;
      const [err] = await asyncCatch(
        register({
          userDetails,
          files,
          desktopRegister: true,
          invitedBy: "",
        })
      );
      if (!err) stepForward();
    },
  });

  return (
    <div className="relative">
      <form
        className="relative mt-6 grid gap-y-4"
        onSubmit={formik.handleSubmit}
      >
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
        <StepActions onBack={stepBackward} nextChildren={<>Finish Process</>} />
        {isErrorRegister && (
          <FieldError error="Could not register please try again later" />
        )}
      </form>
      {isLoadingRegister && (
        <Loader centered={true} text="Finishing process..." />
      )}
    </div>
  );
};

export default ReferenceTwo;
