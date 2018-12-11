import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './index.css';

const URI = 'http://192.168.211.112:4000/';
const client = new ApolloClient({
  uri: URI,
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
