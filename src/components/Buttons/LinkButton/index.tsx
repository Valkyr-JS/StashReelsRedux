import React from "react";
import { default as cx } from "classnames";
import styles from "./LinkButton.module.scss";

/** A button component that looks like a basic link. */
const LinkButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  const classes = cx(styles.LinkButton, props.className);
  return (
    <button {...props} className={classes} type={props.type ?? "button"} />
  );
};

export default LinkButton;
