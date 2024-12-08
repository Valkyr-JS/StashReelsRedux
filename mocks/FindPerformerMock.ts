import { graphql, HttpResponse } from "msw";

/** Find a single performer and return all their available data. */
const FindPerformerMock = graphql.query(
  "FindPerformer",
  ({ query, variables }) => {
    console.log("FindPerformer mock query:", query);
    console.log("FindPerformer mock variables:", variables);

    return HttpResponse.json({
      data: { findPerformer: performer },
    });
  }
);

export default FindPerformerMock;

/* ---------------------------------------------------------------------------------------------- */
/*                                            Mock data                                           */
/* ---------------------------------------------------------------------------------------------- */

const performer = {
  birthdate: "1996-06-28",
  disambiguation: "",
  ethnicity: "Caucasian",
  gender: "FEMALE",
  id: "416",
  name: "Skye Blue",
  urls: ["https://twitter.com/skyebluewantsu"],
};
