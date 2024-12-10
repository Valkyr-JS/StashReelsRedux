import { graphql, HttpResponse } from "msw";

/**
 * For `function*` docs, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */

/** Mock an AddScenePlayRecord mutation. Returned count starts at 3 and
 * increases up to 9999. */
const AddScenePlayRecordMock = graphql.mutation(
  "AddScenePlayRecord",
  function* ({ query, variables }) {
    console.log("AddScenePlayRecord mock query:", query);
    console.log("AddScenePlayRecord mock variables:", variables);

    let count = 12;
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
