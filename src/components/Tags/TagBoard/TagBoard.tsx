import React from "react";

interface TagBoardProps {
  tags: {
    id: Tag["id"];
    name: Tag["name"];
  }[];
}

const TagBoard: React.FC<TagBoardProps> = (props) => {
  return (
    <div>
      {props.tags.map((t) => (
        <span key={t.id}>{t.name}</span>
      ))}
    </div>
  );
};

export default TagBoard;
