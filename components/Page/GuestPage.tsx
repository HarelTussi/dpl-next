import Container from "@ui/Container";
import { clsx } from "@utils/index";
type Props = {
  children: React.ReactNode;
  withGridLines?: boolean;
  classNames?: string;
  className?: string;
};

const GuestPage = ({
  children,
  withGridLines = false,
  classNames,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "relative flex min-h-full flex-col overflow-hidden bg-cover  bg-no-repeat pt-[120px] md:min-h-0 md:bg-contain  lg:min-h-0 xl:min-h-full xl:pt-[180px]",
        classNames,
        className
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
