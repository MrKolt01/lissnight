import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './DesktopPlayer.module.css'
import PlayerInfo from './PlayerInfo'
import DesktopPlayerControls from './DesktopPlayerControls'
import DesktopPlayerExtra from './DesktopPlayerExtra'

const DesktopPlayer = () => (
  <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="center"
    className={styles.Player}
  >
    <Grid
      item
      xs={3}
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <PlayerInfo />
    </Grid>
    <Grid
      item
      xs={6}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <DesktopPlayerControls />
    </Grid>
    <Grid
      item
      xs={3}
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <DesktopPlayerExtra />
    </Grid>
  </Grid>
)

export default DesktopPlayer
