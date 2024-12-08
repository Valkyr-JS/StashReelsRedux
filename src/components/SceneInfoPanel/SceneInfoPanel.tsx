import React from "react";
import styles from "./SceneInfoPanel.module.scss";

interface SceneInfoPanelProps {
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
  ) : (
    <div className={styles["studio-name"]}>{props.studio.name}</div>
  );

  return (
    <section className={styles.SceneInfoPanel}>
      <div className="header">
        <div className={styles["studio-logo"]}>{studioLogo}</div>
        <h1>{props.title ?? "Untitled"}</h1>
      </div>
    </section>
  );
};

export default SceneInfoPanel;
