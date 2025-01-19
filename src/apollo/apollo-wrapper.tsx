"use client";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { PropsWithChildren } from "react";

function makeClient(): ApolloClient<unknown> {
  const dbPath =
    process.env.NODE_ENV === "production"
      ? "/graphql"
      : process.env["NEXT_PUBLIC_STASH_SERVER"] + "/graphql";

  const httpLink = new HttpLink({
    uri: dbPath,
  });
  return new ApolloClient<unknown>({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}
export function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
