import React from "react";
import styles from "./SceneInfoPanel.module.scss";
import { OCountIcon, PlayCountIcon } from "../Icons/Icons";
import MinimalButton from "../Buttons/MinimalButton/MinimalButton";

interface SceneInfoPanelProps {
  o_count: Scene["o_counter"];
  play_count: Scene["play_count"];
  studio: {
    image_path: Studio["image_path"];
    name: Studio["name"];
  };
  title: Scene["title"];
}

/** React component for the desktop-view scene info panel. */
const SceneInfoPanel: React.FC<SceneInfoPanelProps> = (props) => {
  /* ------------------------------------------- Header ------------------------------------------- */

  // If there is an image for the studio, use it. Otherwise, create a text
  // logo.
  const studioLogo = props.studio.image_path ? (
    <img src={props.studio.image_path} alt={props.studio.name} />
  ) : null;

  return (
    <section className={styles.SceneInfoPanel}>
      <div className={styles["header"]}>
        <div className={styles["studio-logo"]}>{studioLogo}</div>
        <h1 className={styles.title}>{props.title ?? "Untitled"}</h1>
        <div className={styles["studio-name"]}>{props.studio.name}</div>
      </div>
      <ul className={styles.stats}>
        <li>
          <MinimalButton Icon={PlayCountIcon} state={props.play_count ?? 0} />
        </li>
        <li>
          <MinimalButton Icon={OCountIcon} state={props.o_count ?? 0} />
        </li>
      </ul>
    </section>
  );
};

export default SceneInfoPanel;
