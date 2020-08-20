import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import React from 'react'
import { IconButton } from '@material-ui/core'

const LikeButton = () => {
  return (
    <IconButton aria-label="like audio" size={'small'}>
      <FavoriteBorderIcon />
    </IconButton>
  )
}

export default LikeButton
