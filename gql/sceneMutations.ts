import { gql } from "@apollo/client";

/** Add an O record to a scene using the current datetime. */
export const ADD_SCENE_O_RECORD = gql`
  mutation AddSceneORecord($sceneID: ID!) {
    sceneAddO(id: $sceneID) {
      count
    }
  }
`;

/** Add a play record to a scene using the current datetime. */
export const ADD_SCENE_PLAY_RECORD = gql`
  mutation AddScenePlayRecord($sceneID: ID!) {
    sceneAddPlay(id: $sceneID) {
      count
    }
  }
`;

/** Set the rating of a scene. */
export const SET_SCENE_RATING = gql`
  mutation SetSceneRating($input: SceneUpdateInput!) {
    sceneUpdate(input: $input) {
      id
      rating100
    }
  }
`;
