import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// })

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)

const SideMenu: React.FC = () => {
  const classes = useStyles()
  const [director, setDirector] = useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDirector(event.target.value as string)
  }
  return (
    <div>
      <Box m={5}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <p>映画監督</p>
            <Box display="flex" flexDirection="column">
              <TextField label="監督名" />
              <TextField label="年齢" />
              <CardActions>
                <Button variant="outlined" color="primary">
                  追加
                </Button>
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box m={5}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <p>映画作品</p>
            <Box display="flex" flexDirection="column">
              <TextField label="作品名" />
              <TextField label="ジャンル" />
              <CardActions>
                {/* <Button variant="outlined" color="primary">
                  追加
                </Button> */}
                <FormControl className={classes.formControl}>
                  <InputLabel id="director-select-label">Director</InputLabel>
                  <Select labelId="director-select-label" id="directorId" value={director} onChange={handleChange}>
                    <MenuItem value={10}>宮崎駿</MenuItem>
                    <MenuItem value={20}>宮崎駿</MenuItem>
                    <MenuItem value={30}>宮崎駿</MenuItem>
                  </Select>
                </FormControl>
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default SideMenu
