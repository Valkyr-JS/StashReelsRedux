import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import React from "react";
import { handlers } from "../mocks/handlers";
import "./theme.scss";

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
  decorators: [
    (Story) => (
      <ApolloProvider client={mockedClient}>
        <Story />
      </ApolloProvider>
    ),
  ],
  loaders: [mswLoader], // Add the MSW loader to all stories
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
};

export default preview;

const mockedClient = new ApolloClient({
  uri: (import.meta as StorybookImportMeta).env.VITE_STASH_URI + "/playground",
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

interface StorybookImportMeta extends ImportMeta {
  env: {
    VITE_STASH_URI: string;
  };
}
