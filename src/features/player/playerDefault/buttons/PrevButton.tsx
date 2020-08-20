import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded'
import { IconButton } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { playPrev } from '../../playerSlice'
import IconButtonProps from './types'

const PrevButton = ({ isMobile = false }: IconButtonProps) => {
  const dispatch = useDispatch()
  const onPrev = () => {
    dispatch(playPrev())
  }
  return (
    <IconButton
      aria-label="previous audio"
      onClick={onPrev}
      style={{ padding: isMobile ? 3 : 12 }}
    >
      <SkipPreviousRoundedIcon fontSize={isMobile ? 'large' : 'default'} />
    </IconButton>
  )
}

export default PrevButton
