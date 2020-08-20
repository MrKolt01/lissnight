import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { ScreenWidth } from '../layout/MainPageLayout'

type HistoryButtonsProps = {
  width: ScreenWidth,
}

const HistoryButtons = ({ width }: HistoryButtonsProps) => {
  const history = useHistory()
  const onForward = () => {
    history.goForward()
  }
  const onBack = () => {
    history.goBack()
  }

  const buttonSize = isWidthUp('sm', width) ? 'medium' : 'small'

  return (
    <div style={{ minWidth: '98px' }}>
      <IconButton
        color={'default'}
        size={buttonSize}
        aria-label="repeat audio"
        onClick={onBack}
        style={{ marginRight: '4px' }}
      >
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <IconButton
        color={'default'}
        aria-label="repeat audio"
        onClick={onForward}
        style={{ marginRight: '16px' }}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </div>
  )
}

export default withWidth()(HistoryButtons)
