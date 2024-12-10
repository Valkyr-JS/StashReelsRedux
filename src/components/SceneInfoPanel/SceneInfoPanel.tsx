import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styles from "./SceneInfoPanel.module.scss";
import { OCountIcon, PlayCountIcon } from "../Icons/Icons";
import MiniValueButton from "../Buttons/MiniButtons/MiniValueButton";
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

/** Responsive component for the scene info panel. */
const SceneInfoPanel: React.FC<SceneInfoPanelProps> = (props) => {
  /* ------------------------------------------- Header ------------------------------------------- */

  // If there is an image for the studio, use it. Otherwise, create a text
  // logo.
  const studioLogo = props.studio.image_path ? (
    <img src={props.studio.image_path} alt={props.studio.name} />
  ) : null;

  /* ----------------------------------------- Play count ----------------------------------------- */

  const [playCount, setPlayCount] = useState(props.play_count ?? 0);

  // Create the hook for updating the database.
  const [addScenePlayRecord] = useMutation<AddScenePlayRecordResult>(
    sceneMutations.ADD_SCENE_PLAY_RECORD,
    { variables: { sceneID: props.id } }
  );

  /** Click event handler for the play count button. */
  const playCountClickHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () =>
    addScenePlayRecord().then((res) => {
      console.log(res);
      setPlayCount(res.data?.sceneAddPlay.count ?? 0);
    });

  /* ------------------------------------------- O count ------------------------------------------ */

  const [oCount, setOCount] = useState(props.o_count ?? 0);

  // Create the hook for updating the database
  const [addSceneORecord] = useMutation<AddSceneORecordResult>(
    sceneMutations.ADD_SCENE_O_RECORD,
    { variables: { sceneID: props.id } }
  );

  /** Click event handler for the O count button. */
  const oCountClickHandler: React.MouseEventHandler<HTMLButtonElement> = () =>
    addSceneORecord().then((res) => {
      console.log(res);
      setOCount(res.data?.sceneAddO.count ?? 0);
    });

  return (
    <section className={styles.SceneInfoPanel}>
      <div className={styles.header}>
        <div className={styles["studio-logo"]}>{studioLogo}</div>
        <h1 className={styles.title}>{props.title ?? "Untitled"}</h1>
        <div className={styles["studio-name"]}>{props.studio.name}</div>
      </div>
      <ul className={styles.stats}>
        <li>
          <MiniValueButton
            Icon={PlayCountIcon}
            onClick={playCountClickHandler}
            value={playCount}
          />
        </li>
        <li>
          <MiniValueButton
            Icon={OCountIcon}
            onClick={oCountClickHandler}
            value={oCount}
          />
        </li>
      </ul>
    </section>
  );
};

export default SceneInfoPanel;
