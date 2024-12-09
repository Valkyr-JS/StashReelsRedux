import { gql } from "@apollo/client";

/** Add a play record to a scene using the current datetime. */
export const ADD_SCENE_PLAY_RECORD = gql`
  mutation AddScenePlayRecord($sceneID: ID!) {
    sceneAddPlay(id: $sceneID) {
      count
    }
  }
`;
