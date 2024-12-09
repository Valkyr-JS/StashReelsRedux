import { graphql, HttpResponse } from "msw";

const AddScenePlayRecordMock = graphql.mutation(
  "AddScenePlayRecord",
  ({ query, variables }) => {
    console.log("AddScenePlayRecord mock query:", query);
    console.log("AddScenePlayRecord mock variables:", variables);

    return HttpResponse.json({
      data: { sceneAddPlay: { count: 1 } },
    });
  }
);

export default [AddScenePlayRecordMock];
