import styles from "./button.module.css";
import "../index.css";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  variant = "primary",
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant && styles[variant],
        isDisabled && styles.disabled
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
