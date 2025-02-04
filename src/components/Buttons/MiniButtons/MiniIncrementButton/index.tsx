import React, { PropsWithChildren } from "react";

interface MiniIncrementButtonProps extends PropsWithChildren {
  /** The click event handler for the increment button. */
  incrementClickHandler: React.MouseEventHandler<HTMLButtonElement>;

  /** Whether the value is displayed next to the content. */
  showValue: boolean;

  /** The current value. */
  value: number;

  /** The click event handler for the decrement button. If `undefined`, not
   * button is rendered. */
  decrementClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

/** A component with a button to increase a value and an optional button to
 * decrease the same value. */
const MiniIncrementButton: React.FC<MiniIncrementButtonProps> = (props) => {
  const valueEl = props.showValue ? <span>{props.value}</span> : null;

  // Only render the decrement button if a click handler has been provided for
  // it.
  const decrementButton = props.decrementClickHandler ? (
    <button onClick={props.decrementClickHandler} type="button">
      Decr.
    </button>
  ) : null;

  return (
    <span>
      {decrementButton}
      <span>
        <span>{props.children}</span>
        {valueEl}
      </span>
      <button onClick={props.incrementClickHandler} type="button">
        Incr.
      </button>
    </span>
  );
};

export default MiniIncrementButton;
