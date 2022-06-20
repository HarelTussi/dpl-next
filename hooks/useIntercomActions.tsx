function useIntercomActions() {
  const openIntercom = () => {
    if (!window) return;
    else {
      const intercom = document.getElementsByClassName(
        "intercom-launcher"
      )[0] as HTMLDivElement;
      if (intercom) {
        intercom.click();
      }
    }
  };

  return { openIntercom };
}

export default useIntercomActions;
