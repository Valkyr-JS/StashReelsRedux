import React from "react";
import TagLink from "../TagLink/TagLink";
import type { TagLinkProps } from "../TagLink/TagLink";
import styles from "./TagList.module.scss";

interface TagListProps {
  tags: TagLinkProps[];
}

const TagList: React.FC<TagListProps> = (props) => {
  return (
    <div className={styles.TagList}>
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

export default TagList;
