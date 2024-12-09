import { useMutation } from "@apollo/client";
import React from "react";
import styles from "./SceneInfoPanel.module.scss";
import { OCountIcon, PlayCountIcon } from "../Icons/Icons";
import MinimalButton from "../Buttons/MinimalButton/MinimalButton";
import { sceneMutations } from "../../../gql";

interface SceneInfoPanelProps {
  id: Scene["id"];
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

  /* -------------------------------------------- Stats ------------------------------------------- */

  // Play count
  const [addScenePlayRecord] = useMutation(
    sceneMutations.ADD_SCENE_PLAY_RECORD,
    {
      variables: { sceneID: props.id },
    }
  );

  const updatePlayCount: MinimalButtonMouseEventHandler = (e, updatedState) => {
    console.log(e, updatedState);
    addScenePlayRecord();
  };

  // O count
  const updateOCount: MinimalButtonMouseEventHandler = (e, updatedState) => {
    console.log(e, updatedState);
  };

  return (
    <section className={styles.SceneInfoPanel}>
      <div className={styles.header}>
        <div className={styles["studio-logo"]}>{studioLogo}</div>
        <h1 className={styles.title}>{props.title ?? "Untitled"}</h1>
        <div className={styles["studio-name"]}>{props.studio.name}</div>
      </div>
      <ul className={styles.stats}>
        <li>
          <MinimalButton
            Icon={PlayCountIcon}
            onClick={updatePlayCount}
            state={props.play_count ?? 0}
          />
        </li>
        <li>
          <MinimalButton
            Icon={OCountIcon}
            onClick={updateOCount}
            state={props.o_count ?? 0}
          />
        </li>
      </ul>
    </section>
  );
};

export default SceneInfoPanel;
