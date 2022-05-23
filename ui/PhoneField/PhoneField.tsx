import FieldError from "@ui/FieldError";
import FieldLabel from "@ui/FieldLabel";
import { clsx } from "@utils/index";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./PhoneField.module.css";
type Props = {
  label?: string;
  containerClassName?: string;
  error?: string;
  touched?: boolean;
};

const PhoneField = ({
  label,
  containerClassName,
  touched,
  error,
  ...rest
}: Props & PhoneInputProps) => {
  const showError = !!touched && !!error;
  return (
    <div className={clsx(styles.container, containerClassName)}>
      {!!label && <FieldLabel>{label}</FieldLabel>}
      <PhoneInput
        enableSearch
        searchPlaceholder="Search..."
        country="US"
        inputClass={styles.input}
        {...rest}
      />
      {showError && <FieldError error={error} />}
    </div>
  );
};

export default PhoneField;
