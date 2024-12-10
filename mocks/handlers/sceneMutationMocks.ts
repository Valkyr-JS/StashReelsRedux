import { graphql, HttpResponse } from "msw";
import { MOCK_SCENE_O_RECORD, MOCK_SCENE_PLAY_RECORD } from "../constants";

/**
 * For `function*` docs, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */

/** Mock an AddSceneORecord mutation. */
const AddSceneORecordMock = graphql.mutation(
  "AddSceneORecord",
  function* ({ query, variables }) {
    console.log("AddSceneORecordMock mock query:", query);
    console.log("AddSceneORecordMock mock variables:", variables);

    let count = MOCK_SCENE_O_RECORD;
    while (count < 9999) {
      count++;
      yield HttpResponse.json({
        data: { sceneAddO: { count } },
      });
    }

    count++;
    return HttpResponse.json({
      data: { sceneAddO: { count } },
    });
  }
);

/** Mock an AddScenePlayRecord mutation. */
const AddScenePlayRecordMock = graphql.mutation(
  "AddScenePlayRecord",
  function* ({ query, variables }) {
    console.log("AddScenePlayRecord mock query:", query);
    console.log("AddScenePlayRecord mock variables:", variables);

    let count = MOCK_SCENE_PLAY_RECORD;
    while (count < 9999) {
      count++;
      yield HttpResponse.json({
        data: { sceneAddPlay: { count } },
      });
    }

    count++;
    return HttpResponse.json({
      data: { sceneAddPlay: { count } },
    });
  }
);

/** Mock a SetSceneRating mutation */
const SetSceneRatingMock = graphql.mutation(
  "SetSceneRating",
  function ({ query, variables }) {
    console.log("SetSceneRating mock query:", query);
    console.log("SetSceneRating mock variables:", variables);

    return HttpResponse.json({
      data: {
        sceneUpdate: {
          id: variables.input.id,
          rating100: variables.input.rating100,
        },
      },
    });
  }
);

export default [
  AddSceneORecordMock,
  AddScenePlayRecordMock,
  SetSceneRatingMock,
];
