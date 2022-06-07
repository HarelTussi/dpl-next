import Container from "@ui/Container";
import Loader from "@ui/Loader";
import { clsx } from "@utils/index";
import { useUser } from "features/users/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";
type Props = {
  children: React.ReactNode;
  withGridLines?: boolean;
};

const AuthPage = ({ children, withGridLines = true }: Props) => {
  const {
    data: user,
    isLoading: isLoadingUser,
    refetch: fetchUser,
    isFetched,
  } = useUser();
  const router = useRouter();

  useEffect(() => {
    !isFetched && !user && fetchUser();
  }, [fetchUser, user, isFetched]);

  if (isLoadingUser) {
    return (
      <div className="relative min-h-screen">
        <Loader text="Loading..." centered />;
      </div>
    );
  }
  if (user) {
    router.push("/");
    return null;
  }
  return (
    <div
      className={clsx(
        "relative flex min-h-full flex-col pt-[120px] pb-[80px] md:min-h-0 lg:min-h-0 xl:min-h-full"
      )}
    >
      <div className="relative z-30 flex min-h-full flex-1 flex-col">
        {children}
      </div>
      {withGridLines && (
        <div className="absolute top-0 left-0 z-0 h-full w-full">
          <Container className="grid h-full w-full grid-cols-3 lg:grid-cols-6">
            <div className="border-l border-l-primary-20"></div>
            <div className="border-l border-l-primary-20"></div>
            <div className="hidden border-l border-l-primary-20"></div>
            <div className="hidden border-l border-l-primary-20 lg:block"></div>
            <div className="hidden border-l border-l-primary-20 lg:block"></div>
            <div className="border-l border-r border-l-primary-20 border-r-primary-20"></div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
