import Container from "@ui/Container";
import { clsx } from "@utils/index";
type Props = {
  children: React.ReactNode;
  withGridLines?: boolean;
};

const GuestPage = ({ children, withGridLines = false }: Props) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden flex min-h-full flex-col pt-[120px]  md:min-h-0 lg:min-h-0 xl:min-h-full xl:pt-[180px] bg-[url('/assets/images/guest-bg.png')] bg-no-repeat md:bg-contain bg-cover"
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
            <div className="hidden border-l border-l-primary-20 lg:block"></div>
            <div className="border-l border-r border-l-primary-20 border-r-primary-20"></div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default GuestPage;
