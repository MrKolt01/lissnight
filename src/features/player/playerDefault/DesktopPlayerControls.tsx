import React, { useEffect, useState } from 'react'
import { Grid, Slider } from '@material-ui/core'
import ShuffleButton from './buttons/ShuffleButton'
import PrevButton from './buttons/PrevButton'
import PlayButton from './buttons/PlayButton'
import NextButton from './buttons/NextButton'
import LoopButton from './buttons/LoopButton'
import moment from 'moment'

const DesktopPlayerControls = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <ControlButtons/>
      <TimeControl/>
    </Grid>
  )
}

const ControlButtons = () => {
  return (
    <Grid item>
      <ShuffleButton/>
      <PrevButton/>
      <PlayButton/>
      <NextButton/>
      <LoopButton/>
    </Grid>
  )
}

const TimeControl = () => {
  const [isSeek, setIsSeek] = useState<boolean>(false)
  const [seekValue, setSeekValue] = useState<number>(0)
  const handleChange = (event: any, newValue: number | number[]) => {
    setIsSeek(true)
    setSeekValue(newValue as number)
  }
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [maxTime, setMaxTime] = useState(0)

  const getCurrentTime = (): string => {
    return formatTime(currentTime)
  }
  const getLeftTime = (): string => {
    return formatTime(maxTime - currentTime)
  }

  const getSeekTime = (): string => {
    return formatTime(seekValue)
  }
  const getSeekLeftTime = (): string => {
    return formatTime(maxTime - seekValue)
  }

  const formatTime = (time: number | number[]) => {
    let format = 'mm:ss'
    if (maxTime >= 3600) {
      format = 'HH:mm:ss'
    }
    if (typeof time === 'number') {
      if(time < 0){
        return moment.utc(0).format(format)
      }
      return moment.utc(time * 1000).format(format)
    }
    return time.toString()
  }

  const setTime = () => {
    // dispatch(setCurrentTime({ time: seekValue as number, force: true }))
    if(playerRef?.duration){
      playerRef.currentTime = seekValue
      setCurrentTime(seekValue)
    }
    setIsSeek(false)
  }

  let [playerRef, setPlayerRef] = useState<HTMLAudioElement | null>(null)
  const updateTime = ()=>{
    if(playerRef){
      setCurrentTime(playerRef.currentTime)
    }
  }
  useEffect(() => {
    const player = document.getElementById('player')
    if(player){
      // @ts-ignore
      setPlayerRef(player)
      player.ontimeupdate = updateTime
      player.onloadedmetadata = () => {
        if (playerRef) {
          setMaxTime(playerRef.duration)
        }
      }
    }
    // eslint-disable-next-line
  }, [playerRef])

  return (
    <Grid
      item
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>{isSeek ? getSeekTime() : getCurrentTime()}</Grid>
      <Grid
        item
        xs
        style={{ padding: 0 }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Slider
          value={isSeek ? seekValue : currentTime}
          onChange={handleChange}
          onChangeCommitted={setTime}
          min={0}
          max={maxTime}
        />
      </Grid>
      <Grid item>{isSeek ? getSeekLeftTime() : getLeftTime()}</Grid>
    </Grid>
  )
}

export default DesktopPlayerControls
