import React from "react";
import { default as cx } from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary";
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = cx(styles.Button, props.className, {
    [styles.primary]: props.variant === "primary",
  });

  /** Handler for the button click event. */
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // If the link is disabled, stop the click event.
    if (props.disabled) e.preventDefault();
    else if (!!props.onClick) props.onClick(e);
  };

  return (
    <button
      {...props}
      onClick={onClickHandler}
      className={classes}
      type={props.type ?? "button"}
    />
  );
};

export default Button;
