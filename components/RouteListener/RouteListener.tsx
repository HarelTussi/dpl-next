import { useRouter } from "next/router";
import { useEffect } from "react";
import { useHeaderStore } from "stores/header";

const RouteListener = () => {
  const router = useRouter();
  const closeDrawer = useHeaderStore((state) => state.closeDrawer);
  const closeDropdown = useHeaderStore((state) => state.closeDropdown);
  // closing header drawer and dropdown on every route change
  useEffect(() => {
    closeDrawer();
    closeDropdown();
  }, [router.asPath, closeDrawer, closeDropdown]);

  return null;
};

export default RouteListener;
