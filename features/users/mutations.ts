import { axios as Axios } from "lib/axios";
import { useMutation } from "react-query";
import { Base64File } from "types/base64";

export const checkEmail = async (email: string) => {
  return true;
  const { data } = await Axios.post(`/users/check/email`, {
    email,
  });
  return data;
};

export const useCheckEmail = () =>
  useMutation<undefined, ApiError, string>((email) => checkEmail(email));

type RegisterAMLPayload = {
  personal: {
    personalFullName: string;
    personalEmailAddress: string;
    personalPhoneNumber: string;
  };
  business: {
    companyName: string;
    companyPhone: string;
    companyEmailAddress: string;
    businessType: string;
    companyCountry: string;
  };
  admin: {};
  bank: {};
  firstReference: {
    nameOfCompany: string;
    country: string;
    contactPerson: string;
    referencesPhoneNumber: string;
    email: string;
  };
  secondReference: {
    nameOfCompany: string;
    country: string;
    contactPerson: string;
    referencesPhoneNumber: string;
    email: string;
  };
  thirdReference: {};
};

type RegisterFilesPayload = Base64File[];

type RegisterPayload = {
  userDetails: {
    fullName: string;
    email: string;
    country: string;
    companyName: string;
    fullAddress: string;
    password: string;
    passwordConfirmation: string;
    phoneNumber: string;
    isSupplier: false;
    aml: RegisterAMLPayload;
    files: RegisterFilesPayload;
  };
  files: RegisterFilesPayload;
  invitedBy: string;
  desktopRegister: true;
};

export const register = async (payload: RegisterPayload) => {
  const { data } = await Axios.post(`/users/addCalculator`, payload);
  return data;
};

export const useRegister = () =>
  useMutation<undefined, ApiError, RegisterPayload>((payload) =>
    register(payload)
  );
