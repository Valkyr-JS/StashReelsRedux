import { graphql, HttpResponse } from "msw";
import performerMockData from "@/mocks/data/performers.json";

/** Find a single performer and return all their available data. */
const FindPerformerMock = graphql.query(
  "FindPerformer",
  ({ query, variables }) => {
    console.log("FindPerformer mock query:", query);
    console.log("FindPerformer mock variables:", variables);

    return HttpResponse.json({
      data: { findPerformer: performerMockData[0] },
    });
  }
);

const performerQueryMocks = [FindPerformerMock];

export default performerQueryMocks;
