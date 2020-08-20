import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './PlayerInfo.module.css'
import { RootState } from '../../../app/reducer'
import { useSelector } from 'react-redux'
import LikeButton from './buttons/LikeButton'

const PlayerInfo = () => {
  const currentAudio = useSelector(
    (state: RootState) => state.player.currentAudio
  )
  return (
    <Grid
      className={styles.Info}
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <img
        src={currentAudio.image}
        alt={currentAudio.name}
        height={56}
        width={90}
        className={styles.Image}
      />
      <Grid item className={styles.Meta}>
        <div className={styles.SongName}>{currentAudio.name}</div>
        <div className={styles.Artist}>{currentAudio.artist}</div>
      </Grid>
      <LikeButton />
    </Grid>
  )
}

export default PlayerInfo
