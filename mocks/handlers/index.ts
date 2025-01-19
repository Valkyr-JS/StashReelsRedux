/** https://mswjs.io/docs/network-behavior/graphql */
import performerQueryMocks from "./performerQueryMocks";
import sceneMutationMocks from "./sceneMutationMocks";

export const handlers = [...sceneMutationMocks, ...performerQueryMocks];
