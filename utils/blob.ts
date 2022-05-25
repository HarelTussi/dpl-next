const blob = {
  convertToBase64: (blob: Blob) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result?.toString() ?? "");
      };
      reader.readAsDataURL(blob);
    }),
  fetchUrl: (url: string) => fetch(url).then((response) => response.blob()),
};

export default blob;
