import React, { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);

  if (!props.text) return null;

  /** Click event handler for the "Read more" button */
  const readMoreClickHandler: React.MouseEventHandler<HTMLButtonElement> = () =>
    setIsExpanded(!isExpanded);

  return (
    <div className={styles["truncated-text"]}>
      <div
        className={styles.inner}
        style={{ WebkitLineClamp: isExpanded ? "none" : props.lineCount }}
      >
        {props.text}
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={readMoreClickHandler}
      >
        Read {isExpanded ? "less" : "more"}
      </button>
    </div>
  );
};

export default TruncatedText;
