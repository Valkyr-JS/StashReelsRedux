import React from "react";
import styles from "./PerformerCard.module.scss";

interface PerformerCardProps {
  birthdate?: Performer["birthdate"];
  content_context?: {
    date: Date;
    type: "gallery" | "image" | "scene";
  };
  disambiguation?: Performer["disambiguation"];
  gender?: Performer["gender"];
  /** Deleting an image in Stash will replace it with a fallback image, so this
   * should never be `undefined` despite what `Performer["image_path"]`
   * indicates. */
  image_path: string;
  name: Performer["name"];
}

/** An card displaying performer data. Can be used in the context of a piece of
 * context, or without a context. */
const PerformerCard: React.FC<PerformerCardProps> = (props) => {
  return (
    <div className={styles.PerformerCard}>
      <div className={styles["image-container"]}>
        <img role="presentation" src={props.image_path} />
      </div>
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
