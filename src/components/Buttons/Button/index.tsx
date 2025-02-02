import React from "react";
import { default as cx } from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = cx(styles.Button, props.className, styles[props.variant]);
  return (
    <button {...props} className={classes} type={props.type ?? "button"} />
  );
};

export default Button;
