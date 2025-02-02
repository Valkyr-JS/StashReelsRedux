import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} type={props.type ?? "button"} />;
};

export default Button;
