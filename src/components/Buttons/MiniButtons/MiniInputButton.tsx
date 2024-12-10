import React, { useRef, useState } from "react";
import styles from "./MiniButton.module.scss";
import { default as cx } from "classnames";

interface MiniInputButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The function executed on changing the input value. */
  callback: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  /** The icon to display when the boolean state is `false` */
  Icon?: React.FC;
  /** Input element props when the button is active. */
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
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

  /** Wrapper element classes */
  const classes = cx(
    "btn",
    "btn-secondary",
    "minimal",
    styles.MiniButton,
    props.className
  );

  /** Input element classes */
  const inputClasses = cx("text-input", "form-control", inputProps.className);

  const icon = Icon ? <Icon /> : null;

  /** Handler for the input onBlur event. */
  const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
    // Deactivate the input.
    setActive(false);

    // Execute the callback event, passing the event.
    callback(e);
  };

  // If input is active, render it
  if (active)
    return (
      <span {...props} className={classes}>
        {icon}
        <input
          {...inputProps}
          className={inputClasses}
          onBlur={onBlurHandler}
          ref={inputRef}
        />
      </span>
    );

  /** Handler for the button onClick event. */
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    // Activate the input element.
    setActive(true);

    // Update the input ref after a short timeout to ensure it is findable.
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className={classes}
      onClick={onClickHandler}
      value={inputProps.value}
    >
      {icon}
      <span>{inputProps.value}</span>
    </button>
  );
};

export default MiniInputButton;
