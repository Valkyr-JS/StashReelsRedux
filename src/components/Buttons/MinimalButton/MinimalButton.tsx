import React, { useState } from "react";
import styles from "./MinimalButton.module.scss";
import { default as cx } from "classnames";

type MinimalButtonProps = (
  | MinimalBooleanButtonProps
  | MinimalNumberButtonProps
) & {
  /** The icon to display for the button */
  Icon: React.FC;
  /** The mouse event handler. */
  onClick?: MinimalButtonMouseEventHandler;
};

interface MinimalBooleanButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onClick"
  > {
  /** The icon to display when the boolean state is `false` */
  IconOff: React.FC;
  /** The initial state value. */
  state: boolean;
}

interface MinimalNumberButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onClick"
  > {
  /** The icon to display when the boolean state is `false` */
  IconOff?: undefined;
  /** The initial state value. */
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
    const updatedState = typeof val === "boolean" ? !val : val + 1;
    setState(updatedState);

    // Trigger a callback function if provided
    if (props.onClick) props.onClick(e, updatedState);
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
