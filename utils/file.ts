import blob from "./blob";
import { Base64File } from "../types/base64";

const file = {
  convertToBase64: async (file: File): Promise<Base64File> => {
    const { name, size } = file;
    const objectURL = URL.createObjectURL(file);
    const fetchedBlob = await blob.fetchUrl(objectURL);
    const data = await blob.convertToBase64(fetchedBlob);
    const type = data.split(",")[0];

    return {
      name,
      size,
      data,
      type,
    };
  },
};

export default file;
