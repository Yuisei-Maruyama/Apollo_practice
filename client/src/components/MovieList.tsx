import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { useQuery } from '@apollo/client'
import { MOVIE_LIST } from '../query/query'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type Movie = {
  id: string
  name: string
  genre: string
  director: {
    name: string
  }
}

const MovieList: React.FC = () => {
  const classes = useStyles()
  // useQueryにGraphQLのQueryを渡す
  const { loading, error, data } = useQuery(MOVIE_LIST)
  if (loading) {
    return <p>Loading</p>
  } else if (error) {
    return <p>Error...</p>
  } else {
    return (
      <Box m={5}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>タイトル</TableCell>
                <TableCell align="right">ジャンル</TableCell>
                <TableCell align="right">監督</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.movieList.map((movie: Movie) => (
                <TableRow key={movie.id}>
                  <TableCell component="th" scope="row">
                    {movie.name}
                  </TableCell>
                  <TableCell align="right">{movie.genre}</TableCell>
                  <TableCell align="right">{movie.director.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }
}

export default MovieList
