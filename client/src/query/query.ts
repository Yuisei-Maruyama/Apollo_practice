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
      age
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

export const ADD_DIRECTOR = gql`
  mutation($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
      name
      age
    }
  }
`
