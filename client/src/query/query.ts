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
