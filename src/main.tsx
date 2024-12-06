import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

// Connect to the user's Stash database.
const stashClient = new ApolloClient({
  uri: import.meta.env.VITE_STASH_URI + "/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={stashClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
