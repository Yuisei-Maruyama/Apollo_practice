import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import './App.css'
import Header from './components/Header'
import Box from '@material-ui/core/Box'
import SideMenu from './components/SideMenu'
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
        <Box display="flex">
          <SideMenu />
          <MovieList />
        </Box>
      </ApolloProvider>
    </div>
  )
}

export default App
