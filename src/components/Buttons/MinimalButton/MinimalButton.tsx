import React from "react";
import styles from "./MinimalButton.module.scss";
import { default as cx } from "classnames";

type MinimalButtonProps = (
  | MinimalBooleanButtonProps
  | MinimalNumberButtonProps
) & {
  /** The icon to display for the button */
  Icon: React.FC;
};

interface MinimalBooleanButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The icon to display when the boolean state is `false` */
  IconOff: React.FC;
  /** The boolean state of the button. */
  val: boolean;
}

interface MinimalNumberButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The icon to display when the boolean state is `false` */
  IconOff?: undefined;
  /** The displayed value. */
  val: number;
}

/** A minimalistic button showing an icon and a value, which updates on click. Boolean  */
const MinimalButton: React.FC<MinimalButtonProps> = ({
  Icon,
  IconOff,
  val,
  ...props
}) => {
  const value = typeof val === "boolean" ? null : <span>{val}</span>;

  const currentIcon =
    IconOff && typeof val === "boolean" && !val ? <IconOff /> : <Icon />;

  const classes = cx(
    "btn",
    "btn-secondary",
    "minimal",
    styles.MinimalButton,
    props.className
  );

  return (
    <button {...props} type={props.type ?? "button"} className={classes}>
      {currentIcon}
      {value}
    </button>
  );
};

export default MinimalButton;
