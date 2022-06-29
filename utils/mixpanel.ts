import mixpanelClient, { OverridedMixpanel } from "mixpanel-browser";

declare global {
  var mixpanel: OverridedMixpanel | undefined;
}

mixpanelClient.init("4e68fa6f5bae428d9bbd6365c1de0fca");

if (process.env.NODE_ENV !== "production") global.mixpanel = mixpanelClient;

export const mixpanel = global.mixpanel || mixpanelClient;
