import React, { PropsWithChildren, useEffect, useState } from "react";
import { useResizeObserver } from "@/hooks";
import styles from "./TruncatedText.module.scss";

interface ITruncatedTextProps extends PropsWithChildren {
  /** The maximum number of lines displayed when the text is truncated. If
   * `undefined`, the text will not be truncated. */
  lineCount?: number;
}

/** A wrapper component that limits the number of lines of text displayed.
 * */
const TruncatedText: React.FC<ITruncatedTextProps> = (props) => {
  const [ref, rect] = useResizeObserver<HTMLDivElement>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Always show the "read more" button if the component is expanded.
    if (isExpanded) setShowButton(true);
    // Only show the "read more" button if the component would show a
    // scrollbar.
    else if (ref.current) {
      const { offsetHeight, scrollHeight } = ref.current;

      const show =
        !!offsetHeight && !!scrollHeight && offsetHeight < scrollHeight;
      setShowButton(show);
    }
    // If the component can't be found, do not show the "read more" button.
    else setShowButton(false);
  }, [isExpanded, ref, rect]);

  /** Click event handler for the "Read more" button */
  const readMoreClickHandler: React.MouseEventHandler<HTMLButtonElement> = () =>
    setIsExpanded(!isExpanded);

  const readMore = showButton ? (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={readMoreClickHandler}
    >
      Read {isExpanded ? "less" : "more"}
    </button>
  ) : null;

  /* ----------------------------------------- Comnponent ----------------------------------------- */

  if (!props.children) return null;

  return (
    <div className={styles.TruncatedText}>
      <div
        className={styles.inner}
        ref={ref}
        style={{ WebkitLineClamp: isExpanded ? "none" : props.lineCount }}
      >
        {props.children}
      </div>
      {readMore}
    </div>
  );
};

export default TruncatedText;
