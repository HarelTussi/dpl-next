import Container from "@ui/Container";
import Loader from "@ui/Loader";
import { clsx } from "@utils/index";
import { useUser } from "features/users/queries";
import { useRouter } from "next/router";
type Props = {
  children: React.ReactNode;
  withGridLines?: boolean;
};

const PrivatePage = ({ children, withGridLines = false }: Props) => {
  const { data: user, isLoading: isLoadingUser } = useUser();
  const router = useRouter();
  if (isLoadingUser) {
    return <Loader text="Loading..." />;
  }
  if (!user) {
    router.push("/login");
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

export default PrivatePage;
