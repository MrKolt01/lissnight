import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded'
import { IconButton } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { playNext } from '../../playerSlice'
import IconButtonProps from './types'

const NextButton = ({ isMobile = false }: IconButtonProps) => {
  const dispatch = useDispatch()
  const onNext = () => {
    dispatch(playNext())
  }
  return (
    <IconButton
      aria-label="next audio"
      onClick={onNext}
      style={{ padding: isMobile ? 3 : 12 }}
    >
      <SkipNextRoundedIcon fontSize={isMobile ? 'large' : 'default'} />
    </IconButton>
  )
}

export default NextButton
