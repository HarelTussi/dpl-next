export const GTM_ID = "GTM-WX3FJK9";

export const pageview = (url: string) => {
  //@ts-ignore
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
