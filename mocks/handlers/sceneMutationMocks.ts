import { graphql, HttpResponse } from "msw";
import { MOCK_SCENE_PLAY_RECORD } from "../constants";

/**
 * For `function*` docs, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */

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

export default [AddScenePlayRecordMock];
