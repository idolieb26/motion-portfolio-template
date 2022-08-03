import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

const SPACE = "wszxm40sbkc8"
const TOKEN = "KHUWtS03SHQl25bigtpgk3dAAlHl3tl96kYld0PNkXg";
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/`;

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
    'Content-Language': 'en-us',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
