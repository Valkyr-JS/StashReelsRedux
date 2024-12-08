import React from "react";
import styles from "./SceneInfoPanel.module.scss";

interface SceneInfoPanelProps {
  scene: Scene;
}

/** React component for the desktop-view scene info panel. */
const SceneInfoPanel: React.FC<SceneInfoPanelProps> = (props) => {
  return (
    <div className={styles.SceneInfoPanel}>
      <h1>{props.scene.title ?? "Untitled"}</h1>
    </div>
  );
};

export default SceneInfoPanel;
