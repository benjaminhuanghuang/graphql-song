import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 1. apollo client denpendencies
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';


// 2. Create the HttpLink that will connect your ApolloClient instance with the GraphQL API
const httpLink = new HttpLink({ uri: 'http://localhost:8964/graphql' })

// 3. Instantiate ApolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>

  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
