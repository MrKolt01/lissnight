import React from 'react'
import DesktopPlayer from './DesktopPlayer'
import MobilePlayer from './MobilePlayer'
import { isWidthUp, withWidth } from '@material-ui/core'
import { ScreenWidth } from '../../layout/MainPageLayout'

type AdaptivePlayerProps = {
  width: ScreenWidth,
}

const AdaptivePlayer = ({ width }: AdaptivePlayerProps) => {
  return <>{isWidthUp('md', width) ? <DesktopPlayer /> : <MobilePlayer />}</>
}

export default withWidth()(AdaptivePlayer)
