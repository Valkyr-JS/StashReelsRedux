/** https://mswjs.io/docs/network-behavior/graphql */
import externalRequests from "./externalRequests";
import performerQueryMocks from "./performerQueryMocks";
import sceneMutationMocks from "./sceneMutationMocks";

export const handlers = [
  ...externalRequests,
  ...performerQueryMocks,
  ...sceneMutationMocks,
];
