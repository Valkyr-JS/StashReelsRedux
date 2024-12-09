import React, { useState } from "react";
import styles from "./MinimalButton.module.scss";
import { default as cx } from "classnames";

type MinimalButtonProps = MinimalBooleanButtonProps | MinimalNumberButtonProps;

interface MinimalBooleanButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: React.FC;
  IconOff: React.FC;
  state: boolean;
}

interface MinimalNumberButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: React.FC;
  IconOff: undefined;
  state: number;
}

/** A minimalistic button showing an icon and a value, which updates on click. Boolean  */
const MinimalButton: React.FC<MinimalButtonProps> = ({
  Icon,
  IconOff,
  state,
  ...props
}) => {
  const [val, setState] = useState(state);

  /** Handler for the button click event. */
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (typeof val === "boolean") setState(!val);
    else setState(val + 1);

    // Trigger a callback function if provided
    if (props.onClick) props.onClick(e);
  };

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
    <button
      {...props}
      type={props.type ?? "button"}
      className={classes}
      onClick={onClickHandler}
    >
      {currentIcon}
      {value}
    </button>
  );
};

export default MinimalButton;
