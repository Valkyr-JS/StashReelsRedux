import React from "react";
import styles from "./PerformerCard.module.scss";

interface PerformerCardProps {
  birthdate: Performer["birthdate"];
  content_context?: {
    date: Date;
    type: "gallery" | "image" | "scene";
  };
  disambiguation: Performer["disambiguation"];
  gender: Performer["gender"];
  image_path: Performer["image_path"];
  name: Performer["name"];
}

/** A button-like component that links to a tag page. Typically presented in a list */
const PerformerCard: React.FC<PerformerCardProps> = (props) => {
  return (
    <div className={styles.PerformerCard}>
      <div className={styles["image-container"]}>img</div>
      <div className={styles["primary-info"]}>
        <span className={styles.gender}>F</span>
        <div className={styles["name-info"]}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.disambiguation}>{props.disambiguation}</div>
        </div>
      </div>
      <div className={styles.age}>XX years old in this scene</div>
    </div>
  );
};

export default PerformerCard;
