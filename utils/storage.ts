const storagePrefix = "tenders";
const GDStoragePrefix = "get";

const storage = {
  getToken: () => {
    return window.localStorage.getItem(`${storagePrefix}token`) ?? "";
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  getGDToken: () => {
    return window.localStorage.getItem(`${GDStoragePrefix}token`) ?? "";
  },
  setGDToken: (token: string) => {
    window.localStorage.setItem(`${GDStoragePrefix}token`, token);
  },
  clearGDToken: () => {
    window.localStorage.removeItem(`${GDStoragePrefix}token`);
  },
};

export default storage;
