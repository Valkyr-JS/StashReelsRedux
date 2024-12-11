import React from "react";
import TagLink from "../TagLink/TagLink";
import type { TagLinkProps } from "../TagLink/TagLink";
import styles from "./TagBoard.module.scss";

interface TagBoardProps {
  tags: TagLinkProps[];
}

const TagBoard: React.FC<TagBoardProps> = (props) => {
  return (
    <div className={styles.TagBoard}>
      <ul>
        {props.tags.map((tProps) => (
          <li key={tProps.id}>
            <TagLink {...tProps} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagBoard;
