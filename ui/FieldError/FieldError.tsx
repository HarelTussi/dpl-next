import Paragraph from "@ui/Paragraph";
import { clsx } from "@utils/index";

type Props = {
  error?: string;
};

const FieldError = ({
  error,
  ...rest
}: Props & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <Paragraph
      className={clsx("absolute -bottom-[18px] !text-xs text-error-50")}
      {...rest}
    >
      {error}
    </Paragraph>
  );
};

export default FieldError;
