import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded'
import { IconButton } from '@material-ui/core'
import React from 'react'
import { RootState } from '../../../../app/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { setLoop } from '../../playerSlice'

const LoopButton = () => {
  const dispatch = useDispatch()
  const isLoop = useSelector((state: RootState) => state.player.isLoop)
  const onLoop = () => {
    dispatch(setLoop(!isLoop))
  }
  return (
    <IconButton
      color={isLoop ? 'primary' : 'default'}
      aria-label="repeat audio"
      onClick={onLoop}
    >
      <RepeatRoundedIcon />
    </IconButton>
  )
}

export default LoopButton
