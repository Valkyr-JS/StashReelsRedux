import React from "react";
import styles from "./MiniNumberButton.module.scss";
import { default as cx } from "classnames";

interface MiniNumberButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The icon to display when the boolean state is `false` */
  Icon: React.FC;
  /** The displayed value. */
  value: number;
}

/** A mini number button showing an icon and a value. */
const MiniNumberButton: React.FC<MiniNumberButtonProps> = ({
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

export default MiniNumberButton;
