import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Launches from './Launches'

const client = new ApolloClient({
  uri: 'https://spacex-server.herokuapp.com/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Launches />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
