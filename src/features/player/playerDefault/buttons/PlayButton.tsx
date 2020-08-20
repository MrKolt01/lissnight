import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded'
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded'
import { IconButton } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaying } from '../../playerSlice'
import { RootState } from '../../../../app/reducer'
import IconButtonProps from './types'

const PlayButton = ({ isMobile = false }: IconButtonProps) => {
  const dispatch = useDispatch()
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying)
  const onPlay = () => {
    dispatch(setPlaying(!isPlaying))
  }
  return (
    <IconButton
      aria-label="play/pause"
      style={{ padding: isMobile ? 0 : 7 }}
      onClick={onPlay}
    >
      {isPlaying ? (
        <PauseCircleOutlineRoundedIcon
          fontSize={'large'}
          style={{ fontSize: isMobile ? '3rem' : '2.1875rem' }}
        />
      ) : (
        <PlayCircleOutlineRoundedIcon
          fontSize={'large'}
          style={{ fontSize: isMobile ? '3rem' : '2.1875rem' }}
        />
      )}
    </IconButton>
  )
}

export default PlayButton
