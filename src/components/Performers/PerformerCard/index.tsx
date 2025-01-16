import React from "react";

interface PerformerCardProps {
  name: Performer["name"];
}

/** A button-like component that links to a tag page. Typically presented in a list */
const PerformerCard: React.FC<PerformerCardProps> = (props) => {
  return <div>{props.name}</div>;
};

export default PerformerCard;
