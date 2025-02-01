import React from "react";
import { default as cx } from "classnames";
import Link from "next/link";
import styles from "./TagLink.module.scss";
import { FavoriteIcon } from "@/components/Icons";

export interface TagLinkProps {
  /** The Stash ID of the tag. */
  id: Tag["id"];

  /** The name of the tag. */
  name: Tag["name"];

  /** Whether the link is currently disabled. Defaults to `false`. */
  disabled?: boolean;

  /** Whether the tag has been marked by the user as a favorite. */
  favorite?: Tag["favorite"];
}

/** A button-like component that links to a tag page. Typically presented in a
 * list. */
const TagLink: React.FC<TagLinkProps> = (props) => {
  const href = "/tags/" + props.id;
  const linkClasses = cx(styles.TagLink, { [styles.disabled]: props.disabled });
  const tabIndex = props.disabled ? -1 : undefined;

  /** Handler for the Link click event. */
  const onClickHandler: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // If the link is disabled, stop the click event.
    if (props.disabled) e.preventDefault();
  };

  /* ------------------------------------------ Favorite ------------------------------------------ */

  const favoriteIcon = props.favorite ? <FavoriteIcon noSrText /> : null;
  const favoriteSR = props.favorite ? (
    <span className={styles["favorite-text"]}>Favorite tag</span>
  ) : null;

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <Link
      aria-disabled={props.disabled}
      className={linkClasses}
      href={href}
      onClick={onClickHandler}
      prefetch={!props.disabled}
      tabIndex={tabIndex}
    >
      {favoriteIcon}
      <span>{props.name}</span>
      {favoriteSR}
    </Link>
  );
};

export default TagLink;
