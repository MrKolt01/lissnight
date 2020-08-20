import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './MobilePlayer.module.css'
import PlayerInfo from './PlayerInfo'
import PrevButton from './buttons/PrevButton'
import PlayButton from './buttons/PlayButton'
import NextButton from './buttons/NextButton'

const MobilePlayer = () => (
  <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="center"
    className={styles.Player}
  >
    <Grid
      item
      xs={8}
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <PlayerInfo />
    </Grid>
    <Grid
      item
      xs={4}
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <MobilePlayerControls />
    </Grid>
  </Grid>
)

const MobilePlayerControls = () => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      style={{ flexWrap: 'nowrap' }}
    >
      <Grid item>
        <PrevButton isMobile />
      </Grid>
      <Grid item>
        <PlayButton isMobile />
      </Grid>
      <Grid item>
        <NextButton isMobile />
      </Grid>
    </Grid>
  )
}

export default MobilePlayer
