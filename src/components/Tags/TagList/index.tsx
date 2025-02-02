import React from "react";
import TagLink from "../TagLink";
import type { TagLinkProps } from "../TagLink";
import styles from "./TagList.module.scss";

interface TagListProps {
  tags: TagLinkProps[];
}

const TagList: React.FC<TagListProps> = (props) => {
  // Sort tags by name by default, same as Stash. More sorting options may be
  // added later.
  const sortedTags = props.tags.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.TagList}>
      <ul>
        {sortedTags.map((tProps) => (
          <li key={tProps.id}>
            <TagLink {...tProps} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
