import SelectField from "@ui/SelectField";
import TextField from "@ui/TextField";
import React, { useCallback } from "react";
import { useRegistrationStore } from "stores/registration";
import * as yup from "yup";
import { countries } from "constants/countries";
import { useFormik } from "formik";
import PhoneField from "@ui/PhoneField";
import { businessTypes } from "constants/businessTypes";
import Dropzone from "react-dropzone";

import FieldLabel from "@ui/FieldLabel";
import file from "../../utils/file";
import StepActions from "./StepActions";
const validationSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
  companyEmail: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  companyPhone: yup.string().required("Phone number is required"),
  companyCountry: yup.string().required("Country is required"),
  companyType: yup.string().required("Company type is required"),
});

const BusinessDetails = () => {
  const initialValues = useRegistrationStore((state) => state.businessDetails);
  const files = useRegistrationStore((state) => state.files);
  const setFiles = useRegistrationStore((state) => state.setFiles);
  const stepForward = useRegistrationStore((state) => state.stepForward);
  const stepBackward = useRegistrationStore((state) => state.stepBackward);
  const setBusinessDetails = useRegistrationStore(
    (state) => state.setBusinessDetails
  );
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const preparedFiles = [];
      for (const acceptedFile of acceptedFiles) {
        preparedFiles.push(await file.convertToBase64(acceptedFile));
      }
      setFiles(preparedFiles);
    },
    [setFiles]
  );

  const formik = useFormik({
    validationSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      setBusinessDetails(values);
      stepForward();
    },
  });

  return (
    <div>
      <form className="mt-6 grid gap-y-4" onSubmit={formik.handleSubmit}>
        <div className="register-step__fields">
          <TextField
            label="Company Name*"
            name="companyName"
            id="companyName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            className="w-full"
            error={formik.errors.companyName}
            touched={formik.touched.companyName}
            placeholder="Ex. Lucy"
          />
          <SelectField
            label="Country*"
            options={countries}
            name="companyCountry"
            inputId="companyCountry"
            value={
              (countries
                ? countries.find(
                    (option) => option.value === formik.values.companyCountry
                  )
                : null) as any
            }
            onChange={(option: any) => {
              formik.setFieldValue(
                "companyCountry",
                option ? option.value : "",
                true
              );
            }}
            blurInputOnSelect
            touched={formik.touched.companyCountry}
            error={formik.errors.companyCountry}
            placeholder="Choose from list..."
          />
          <TextField
            type="email"
            label="Company Email*"
            name="companyEmail"
            id="companyEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyEmail}
            className="w-full"
            error={formik.errors.companyEmail}
            touched={formik.touched.companyEmail}
            placeholder="email@email.com"
          />
          <PhoneField
            onBlur={() => {
              formik.setFieldTouched("companyPhone");
            }}
            onChange={(val) => {
              formik.setFieldValue("companyPhone", val);
            }}
            value={formik.values["companyPhone"]}
            label="telephone number*"
            error={formik.errors["companyPhone"]}
            touched={formik.touched["companyPhone"]}
            country="us"
            placeholder="+972525677444"
          />
          <SelectField
            label="company type*"
            options={businessTypes}
            name="companyType"
            inputId="companyType"
            value={
              (businessTypes
                ? businessTypes.find(
                    (option) => option.value === formik.values.companyType
                  )
                : null) as any
            }
            onChange={(option: any) => {
              formik.setFieldValue(
                "companyType",
                option ? option.value : "",
                true
              );
            }}
            blurInputOnSelect
            touched={formik.touched.companyType}
            error={formik.errors.companyType}
            placeholder="Choose from list..."
          />
          <div>
            <FieldLabel>FILES (JPG, PNG, DOC)</FieldLabel>
            <Dropzone
              onDrop={onDrop}
              accept={[
                "image/jpeg",
                "image/png",
                "image/jpg",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/msword",
                "application/pdf",
              ]}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  className="flex h-12 w-full
  items-center rounded-md
  bg-primary-30 pl-4 text-base"
                >
                  <input {...getInputProps()} />
                  {(() => {
                    if (files.length > 0)
                      return (
                        <p className="text-primary-100">
                          {files.length} Files uploaded successfully
                        </p>
                      );
                    if (isDragActive)
                      return (
                        <p className="text-primary-90 opacity-40">
                          Drop the files here ...
                        </p>
                      );
                    return (
                      <p className="text-primary-90 opacity-40">
                        Browse filles
                      </p>
                    );
                  })()}
                </div>
              )}
            </Dropzone>
          </div>
        </div>
        <StepActions onBack={stepBackward} />
      </form>
    </div>
  );
};

export default BusinessDetails;
