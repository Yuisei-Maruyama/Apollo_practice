import { gql } from '@apollo/client'

export const MOVIE_LIST = gql`
  {
    movieList {
      id
      name
      genre
      director {
        name
      }
    }
  }
`
export const DIRECTOR_LIST = gql`
  {
    directorList {
      id
      name
    }
  }
`

export const ADD_MOVIE = gql`
  mutation($name: String!, $genre: String!, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name
      genre
    }
  }
`
