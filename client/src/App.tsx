import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import './App.css'
import Header from './components/Header'
import Container from '@material-ui/core/Container'
import MovieList from './components/MovieList'

const client = new ApolloClient({
  // https だと動かないので注意！！
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <ApolloProvider client={client}>
        <Container maxWidth="lg">
          <MovieList />
        </Container>
      </ApolloProvider>
    </div>
  )
}

export default App
