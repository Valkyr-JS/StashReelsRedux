/** https://mswjs.io/docs/network-behavior/graphql */
import FindPerformerMock from "./FindPerformerMock";
import SceneMocks from "./SceneMocks";

export const handlers = [FindPerformerMock, ...SceneMocks];
