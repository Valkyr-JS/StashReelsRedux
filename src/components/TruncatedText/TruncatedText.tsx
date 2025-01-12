import React, { useEffect, useState } from "react";
import { useResizeObserver } from "../../hooks";
import styles from "./TruncatedText.module.scss";

interface ITruncatedTextProps {
  lineCount?: number;
  text?: JSX.Element | string | null;
}

/** A wrapper component that limits the number of lines of text displayed. Limit
 * can be toggled. Based on the Stash component of the same name.
 * https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Shared/TruncatedText.tsx
 * */
const TruncatedText: React.FC<ITruncatedTextProps> = (props) => {
  const [ref, rect] = useResizeObserver<HTMLDivElement>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isExpanded) setShowButton(true);
    else if (ref.current) {
      const { offsetHeight, scrollHeight } = ref.current;
      const show =
        !!offsetHeight && !!scrollHeight && offsetHeight < scrollHeight;
      setShowButton(show);
    } else setShowButton(false);
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

  if (!props.text) return null;

  return (
    <div className={styles["truncated-text"]}>
      <div
        className={styles.inner}
        ref={ref}
        style={{ WebkitLineClamp: isExpanded ? "none" : props.lineCount }}
      >
        {props.text}
      </div>
      {readMore}
    </div>
  );
};

export default TruncatedText;
