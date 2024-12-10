import React, { useRef, useState } from "react";
import styles from "./MiniButton.module.scss";
import { default as cx } from "classnames";

interface MiniInputButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The function executed on changing the input value. */
  callback: () => void;
  /** The icon to display when the boolean state is `false` */
  Icon?: React.FC;
  /** Input element props when the button is active. */
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  /** The current value. */
  value: number | string;
}

/** A small button component that displays its current value and an icon.
 * Clicking on the component allows the user to enter a new value. */
const MiniInputButton: React.FC<MiniInputButtonProps> = ({
  callback,
  Icon,
  inputProps,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const classes = cx(
    "btn",
    "btn-secondary",
    "minimal",
    styles.MiniButton,
    props.className
  );

  const icon = Icon ? <Icon /> : null;

  const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = () => {
    // setActive(false);
    callback();
  };

  if (active)
    return (
      <span {...props} className={classes}>
        {icon}
        <input {...inputProps} onBlur={onBlurHandler} ref={inputRef} />
      </span>
    );

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setActive(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className={classes}
      onClick={onClickHandler}
    >
      {icon}
      <span>{props.value}</span>
    </button>
  );
};

export default MiniInputButton;
