import React from "react";
import styles from "./TagLink.module.scss";

interface TagLinkProps {
  id: Tag["id"];
  name: Tag["name"];
}

/** A button-like component that links to a tag page. Typically presented in a list */
const TagLink: React.FC<TagLinkProps> = (props) => {
  // TODO - Link to tag page when tags are supported.
  const link = "";

  return (
    <a href={link} className={"btn btn-light " + styles["tag-link"]}>
      {props.name}
    </a>
  );
};

export default TagLink;
