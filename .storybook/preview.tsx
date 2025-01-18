import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import React from "react";
import { handlers } from "../mocks/handlers";

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
  decorators: [
    (Story) => <ApolloProvider client={mockedClient}>{Story()}</ApolloProvider>,
  ],
  loaders: [mswLoader], // Add the MSW loader to all stories
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },
    layout: "centered",
    msw: {
      handlers,
    },
  },

  tags: ["autodocs"],
};

export default preview;

const mockedClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env["STASH_SERVER"] + "/playground"
      : "/playground",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
