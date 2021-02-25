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
import { DIRECTOR_LIST } from '../query/query'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type Director = {
  id: string
  name: string
  age: number
}

const DirectorList: React.FC = () => {
  const classes = useStyles()
  // useQueryにGraphQLのQueryを渡す
  const { loading, error, data } = useQuery(DIRECTOR_LIST)
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
                <TableCell>ID</TableCell>
                <TableCell align="right">名前</TableCell>
                <TableCell align="right">年齢</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.directorList.map((director: Director) => (
                <TableRow key={director.id}>
                  <TableCell component="th" scope="row">
                    {director.id}
                  </TableCell>
                  <TableCell align="right">{director.name}</TableCell>
                  <TableCell align="right">{director.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }
}

export default DirectorList
