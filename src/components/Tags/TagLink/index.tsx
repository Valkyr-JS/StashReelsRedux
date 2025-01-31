import React from "react";
import { default as cx } from "classnames";
import Link from "next/link";
import styles from "./TagLink.module.scss";

interface TagLinkProps {
  /** The Stash ID of the tag. */
  id: Tag["id"];

  /** The name of the tag. */
  name: Tag["name"];

  /** Whether the link is currently disabled. Defaults to `false`. */
  disabled?: boolean;
}

/** A button-like component that links to a tag page. Typically presented in a
 * list. */
const TagLink: React.FC<TagLinkProps> = (props) => {
  const href = "/tags/" + props.id;
  const linkClasses = cx({ [styles.disabled]: props.disabled });

  /** Handler for the Link click event. */
  const onClickHandler: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // If the link is disabled, stop the click event.
    if (props.disabled) e.preventDefault();
  };

  return (
    <Link
      aria-disabled={props.disabled}
      className={linkClasses}
      href={href}
      onClick={onClickHandler}
      prefetch={!props.disabled}
    >
      {props.name}
    </Link>
  );
};

export default TagLink;
