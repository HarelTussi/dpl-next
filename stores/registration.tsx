import create from "zustand";

interface AccountDetails {
  fullName: string;
  country: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}

interface BusinessDetails {
  companyName: string;
  companyCountry: string;
  companyEmail: string;
  companyPhone: string;
  companyType: string;
  files: any[];
}

interface ReferenceDetails {
  companyName: string;
  companyCountry: string;
  companyEmail: string;
  contactPerson: string;
}

interface RegistrationState {
  step: number;
  accountDetails: AccountDetails;
  businessDetails: BusinessDetails;
  referenceOne: ReferenceDetails;
  referenceTwo: ReferenceDetails;
  stepForward: () => void;
  stepBackward: () => void;
}

const initialValues = {
  step: 1,
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
    files: [],
  },
  referenceOne: {
    companyName: "",
    companyCountry: "",
    companyEmail: "",
    contactPerson: "",
  },
  referenceTwo: {
    companyName: "",
    companyCountry: "",
    companyEmail: "",
    contactPerson: "",
  },
};

export const useRegistrationStore = create<RegistrationState>((set) => ({
  ...initialValues,
  setStep: (val: number) =>
    set((state) => ({
      ...state,
      step: val,
    })),
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
}));
