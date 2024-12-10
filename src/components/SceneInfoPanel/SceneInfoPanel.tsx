import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styles from "./SceneInfoPanel.module.scss";
import { OCountIcon, PlayCountIcon, RatingIcon } from "../Icons/Icons";
import MiniInputButton from "../Buttons/MiniButtons/MiniInputButton";
import MiniValueButton from "../Buttons/MiniButtons/MiniValueButton";
import { sceneMutations } from "../../../gql";

interface SceneInfoPanelProps {
  id: Scene["id"];
  o_count: Scene["o_counter"];
  play_count: Scene["play_count"];
  rating100: Scene["rating100"];
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

  /* ------------------------------------------- Rating ------------------------------------------- */

  const [rating100, setRating100] = useState(props.rating100 ?? 0);

  // Create the hook for updating the database.
  const [setSceneRating100] = useMutation<SetSceneRatingResult>(
    sceneMutations.SET_SCENE_RATING
  );

  /** Event handler for setting the rating. */
  const setRatingHandler = (e: React.FocusEvent<HTMLInputElement, Element>) =>
    setSceneRating100({
      variables: { input: { id: props.id, rating100: +e.target.value } },
    }).then((res) => setRating100(res.data?.sceneUpdate.rating100 ?? 0));

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
    addScenePlayRecord().then((res) =>
      setPlayCount(res.data?.sceneAddPlay.count ?? 0)
    );

  /* ------------------------------------------- O count ------------------------------------------ */

  const [oCount, setOCount] = useState(props.o_count ?? 0);

  // Create the hook for updating the database
  const [addSceneORecord] = useMutation<AddSceneORecordResult>(
    sceneMutations.ADD_SCENE_O_RECORD,
    { variables: { sceneID: props.id } }
  );

  /** Click event handler for the O count button. */
  const oCountClickHandler: React.MouseEventHandler<HTMLButtonElement> = () =>
    addSceneORecord().then((res) => setOCount(res.data?.sceneAddO.count ?? 0));

  return (
    <section className={styles.SceneInfoPanel}>
      <div className={styles.header}>
        <div className={styles["studio-logo"]}>{studioLogo}</div>
        <h1 className={styles.title}>{props.title ?? "Untitled"}</h1>
        <div className={styles["studio-name"]}>{props.studio.name}</div>
      </div>
      <ul className={styles.stats}>
        <li>
          <MiniInputButton
            callback={setRatingHandler}
            Icon={RatingIcon}
            inputProps={{
              type: "number",
              min: 0,
              step: 0.1,
              max: 10,
              style: { width: "5rem" },
            }}
            value={rating100}
          />
        </li>
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
