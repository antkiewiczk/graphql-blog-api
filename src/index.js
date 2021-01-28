import React from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

// apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

console.log('client', client);

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

export default client;
