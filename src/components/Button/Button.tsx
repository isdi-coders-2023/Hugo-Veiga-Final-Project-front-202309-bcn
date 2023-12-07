import React from "react";
import StyledButton from "./ButtonStyled";

interface ButtonProps {
  disabled: boolean;
  type: "reset" | "submit" | "button" | undefined;
  text?: string;
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  disabled,
  text,
  type,
  actionOnClick,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={actionOnClick}
      className={className}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
