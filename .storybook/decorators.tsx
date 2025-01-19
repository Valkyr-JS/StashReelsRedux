import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactRenderer } from "@storybook/react";
import React from "react";
import { DecoratorFunction } from "storybook/internal/types";

const mockedClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env["STASH_SERVER"] + "playground"
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

/** Wrap a story in a mock Apollo client. */
export const SbDecApolloProvider: DecoratorFunction<ReactRenderer> = (
  StoryFn
) => {
  return <ApolloProvider client={mockedClient}>{StoryFn()}</ApolloProvider>;
};
