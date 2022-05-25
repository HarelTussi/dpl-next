import { Base64File } from "types/base64";
import create from "zustand";

const initialValues = {
  step: 5,
  accountDetails: {
    fullName: "",
    email: "",
    country: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  },
  businessDetails: {
    companyName: "",
    companyCountry: "",
    companyEmail: "",
    companyPhone: "",
    companyType: "",
  },
  referenceOne: {
    refCompanyName: "",
    refCountry: "",
    refCompanyContact: "",
    refCompanyEmail: "",
    refPhoneNumber: "",
  },
  referenceTwo: {
    refCompanyContact: "",
    refCompanyName: "",
    refCountry: "",
    refCompanyEmail: "",
    refPhoneNumber: "",
  },
  files: [] as Base64File[],
};

type RegistrationDetails = typeof initialValues;

interface RegistrationActions {
  stepForward: () => void;
  stepBackward: () => void;
  setAccountDetails: (
    newAccountDetails: typeof initialValues["accountDetails"]
  ) => void;
  setBusinessDetails: (
    businessDetails: typeof initialValues["businessDetails"]
  ) => void;
  setReferenceOne: (ref: typeof initialValues["referenceOne"]) => void;
  setReferenceTwo: (ref: typeof initialValues["referenceTwo"]) => void;
  setFiles: (files: typeof initialValues["files"]) => void;
}

export const useRegistrationStore = create<
  RegistrationDetails & RegistrationActions
>((set) => ({
  ...initialValues,
  stepForward: () =>
    set((state) => ({
      ...state,
      step: state.step + 1,
    })),
  stepBackward: () =>
    set((state) => ({
      ...state,
      step: state.step - 1,
    })),
  setAccountDetails: (accountDetails) =>
    set((state) => ({
      ...state,
      accountDetails,
    })),
  setBusinessDetails: (businessDetails) =>
    set((state) => ({
      ...state,
      businessDetails,
    })),
  setReferenceOne: (ref) =>
    set((state) => ({
      ...state,
      referenceOne: ref,
    })),
  setReferenceTwo: (ref) =>
    set((state) => ({
      ...state,
      referenceTwo: ref,
    })),
  setFiles: (files) =>
    set((state) => ({
      ...state,
      files,
    })),
}));
