import React from "react";
import styles from "./MiniButton.module.scss";
import { default as cx } from "classnames";

interface MiniValueButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The icon to display when the boolean state is `false` */
  Icon: React.FC;
  /** The current value. */
  value: number | string;
}

/** A small button component that displays its current value and an icon.
 * Clicking on the button updates the value. */
const MiniValueButton: React.FC<MiniValueButtonProps> = ({
  Icon,
  ...props
}) => {
  const classes = cx(
    "btn",
    "btn-secondary",
    "minimal",
    styles.MiniButton,
    props.className
  );

  return (
    <button {...props} type={props.type ?? "button"} className={classes}>
      <Icon />
      <span>{props.value}</span>
    </button>
  );
};

export default MiniValueButton;
