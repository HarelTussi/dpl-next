import { useCallback } from "react";
import { mixpanel } from "@utils/mixpanel";

function useMixpanel() {
  const track = useCallback(
    (eventName: string, eventProperties: Object = {}) => {
      mixpanel && mixpanel?.track(eventName, { ...eventProperties });
    },
    []
  );
  return { track };
}

export default useMixpanel;
