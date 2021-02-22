import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Box, MenuItem } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { DIRECTOR_LIST } from '../query/query'
import { useForm, Controller } from 'react-hook-form'
import { Form, Field } from 'react-final-form'
import { TextField, Select } from 'final-form-material-ui'

type Director = {
  id: string
  name: string
}

type InputForm = {
  directorName?: string
  directorAge?: number
  genre?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 500,
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
  const { data } = useQuery(DIRECTOR_LIST)
  const { register, trigger, handleSubmit, watch, errors } = useForm<InputForm>()
  const onSubmit = (value: InputForm) => console.log(value)
  const classes = useStyles()
  const [directorName, setDirector] = useState('')
  const [directorAge, setAge] = useState('')
  const [movieName, setMovie] = useState('')
  const [movieGenre, setGenre] = useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDirector(event.target.value as string)
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <p>映画監督</p>
                <div>
                  <Box m={3} display="flex" flexDirection="column">
                    <Field
                      name="DirectorName"
                      component={TextField}
                      label="監督名"
                      defaultValue={directorName}
                      onChange={setDirector}
                    />
                    <Field
                      name="DirectorAge"
                      component={TextField}
                      label="年齢"
                      defaultValue={directorAge}
                      onChange={setAge}
                    />
                  </Box>
                </div>
                <Button variant="contained" onChange={handleSubmit} type="submit">
                  追加
                </Button>
                <pre>{JSON.stringify(values)}</pre>
              </CardContent>
            </Card>
          </form>
        )}
      />

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <p>映画作品</p>
                <div>
                  <Box m={3} display="flex" flexDirection="column">
                    <Field
                      name="MovieName"
                      component={TextField}
                      label="作品名"
                      defaultValue={movieName}
                      onChange={setMovie}
                    />
                    <Field
                      name="MovieGenre"
                      component={TextField}
                      label="ジャンル"
                      defaultValue={movieGenre}
                      onChange={setGenre}
                    />
                    <Field
                      fullWidth
                      name="DirectorName"
                      component={Select as any}
                      label="監督選択"
                      formControlProps={{ fullWidth: true }}
                      defaultValue={directorName}
                      onChange={handleChange}
                    >
                      {data &&
                        data.directorList.map((director: Director, key: string) => (
                          <MenuItem key={key} value={director.id}>
                            {director.name}
                          </MenuItem>
                        ))}
                    </Field>
                  </Box>
                </div>
                <Button variant="contained" onChange={handleSubmit} type="submit">
                  追加
                </Button>
                <pre>{JSON.stringify(values)}</pre>
              </CardContent>
            </Card>
          </form>
        )}
      />
    </div>
  )
}

export default SideMenu
