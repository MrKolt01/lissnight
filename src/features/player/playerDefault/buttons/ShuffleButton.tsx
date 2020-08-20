import { IconButton } from '@material-ui/core'
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../app/reducer'
import { setShuffle } from '../../playerSlice'

const ShuffleButton = () => {
  const dispatch = useDispatch()
  const isShuffle = useSelector((state: RootState) => state.player.isShuffle)
  const onShuffle = () => {
    dispatch(setShuffle(!isShuffle))
  }
  return (
    <IconButton
      color={isShuffle ? 'primary' : 'default'}
      aria-label="shuffle playlist"
      onClick={onShuffle}
    >
      <ShuffleOutlinedIcon />
    </IconButton>
  )
}

export default ShuffleButton
