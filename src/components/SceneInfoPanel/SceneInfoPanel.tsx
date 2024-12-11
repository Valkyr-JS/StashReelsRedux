import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styles from "./SceneInfoPanel.module.scss";
import {
  OCountIcon,
  PlayCountIcon,
  RatingIcon,
  StudioIcon,
} from "../Icons/Icons";
import MiniInputButton from "../Buttons/MiniButtons/MiniInputButton";
import MiniValueButton from "../Buttons/MiniButtons/MiniValueButton";
import { sceneMutations } from "../../../gql";
import {
  getRatingInputProps,
  rating100ToUserRating,
  stashDateToLongDate,
  userRatingToRating100,
} from "../../helpers/stash";
import TruncatedText from "../TruncatedText/TruncatedText";
import TagBoard from "../Tags/TagBoard/TagBoard";
import { TagLinkProps } from "../Tags/TagLink/TagLink";

interface SceneInfoPanelProps {
  date: Scene["date"];
  details: Scene["details"];
  id: Scene["id"];
  o_count: Scene["o_counter"];
  play_count: Scene["play_count"];
  rating100: Scene["rating100"];
  studio: {
    image_path: Studio["image_path"];
    name: Studio["name"];
  };
  tags: TagLinkProps[];
  title: Scene["title"];
  userConfig: {
    ratingSystemOptions: ConfigUiResult["ratingSystemOptions"];
  };
}

/** Responsive component for the scene info panel. */
const SceneInfoPanel: React.FC<SceneInfoPanelProps> = (props) => {
  /* ------------------------------------------- Header ------------------------------------------- */

  // If there is an image for the studio, use it. Otherwise, create a text
  // logo.
  const studioLogo = props.studio.image_path ? (
    <img src={props.studio.image_path} alt={props.studio.name} />
  ) : (
    <StudioIcon screenreaderName={props.studio.name} />
  );

  const date = props.date ? (
    <div className={styles["date"]}>{stashDateToLongDate(props.date)}</div>
  ) : null;

  /* ------------------------------------------- Rating ------------------------------------------- */

  // Convert the rating from the Stash database to the user's preferred value.
  const initialRating = rating100ToUserRating(
    props.rating100 ?? 0,
    props.userConfig.ratingSystemOptions
  );

  const [userRating, setUserRating] = useState(initialRating);

  // Create the hook for updating the database.
  const [setSceneRating100] = useMutation<SetSceneRatingResult>(
    sceneMutations.SET_SCENE_RATING
  );

  /** Event handler for setting the rating. */
  const setRatingHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    // Convert the value to rating100 before updating the database
    const updatedUserRating = +e.target.value;
    const updatedRating100 = userRatingToRating100(
      updatedUserRating,
      props.userConfig.ratingSystemOptions
    );

    setSceneRating100({
      variables: { input: { id: props.id, rating100: updatedRating100 } },
    }).then((res) => {
      // Update the state only if the database has successfully updated first.
      setUserRating(
        rating100ToUserRating(
          res.data?.sceneUpdate.rating100 ?? 0,
          props.userConfig.ratingSystemOptions
        )
      );
    });
  };

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

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <section className={styles.SceneInfoPanel}>
      <div className={styles.header}>
        <div className={styles["studio-logo"]}>{studioLogo}</div>
        <h1 className={styles.title}>{props.title ?? "Untitled"}</h1>
        {date}
      </div>
      <ul className={styles.stats}>
        <li>
          <MiniInputButton
            callback={setRatingHandler}
            Icon={RatingIcon}
            inputProps={{
              ...getRatingInputProps(props.userConfig.ratingSystemOptions),
              style: { width: "5rem" },
            }}
            value={userRating}
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
      <TruncatedText lineCount={3} text={props.details} />
      <hr />
      <TagBoard tags={props.tags} />
    </section>
  );
};

export default SceneInfoPanel;
