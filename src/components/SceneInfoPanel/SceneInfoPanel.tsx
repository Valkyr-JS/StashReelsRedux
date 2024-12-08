import React from "react";
import styles from "./SceneInfoPanel.module.scss";
import { PlayCountIcon } from "../Icons/Icons";

interface SceneInfoPanelProps {
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
          <PlayCountIcon />
          <span>{props.play_count ?? 0}</span>
        </li>
      </ul>
    </section>
  );
};

export default SceneInfoPanel;
