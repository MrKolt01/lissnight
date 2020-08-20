import React from 'react'
import { Grid, IconButton, Slider } from '@material-ui/core'
import VolumeUp from '@material-ui/icons/VolumeUp'
import VolumeDown from '@material-ui/icons/VolumeDown'
import { RootState } from '../../../app/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { setVolume } from '../playerSlice'

const DesktopPlayerExtra = () => {
  const dispatch = useDispatch()
  const volume = useSelector((state: RootState) => state.player.volume)
  const changeVolume = (event: any, newValue: number | number[]) => {
    dispatch(setVolume(Number(newValue)))
    localStorage.setItem('volume', String(newValue))
  }

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid item>
        <IconButton>
          <VolumeDown />
        </IconButton>
      </Grid>
      <Grid
        item
        xs
        style={{ padding: 0, maxWidth: '50%', minWidth: '100px' }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Slider value={volume} onChange={changeVolume} />
      </Grid>
      <Grid item>
        <IconButton>
          <VolumeUp />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default DesktopPlayerExtra
