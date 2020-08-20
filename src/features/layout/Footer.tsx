import styles from './Footer.module.css'

import React from 'react'
import { Layout } from 'antd'
import BottomMenu from '../menu/BottomMenu/BottomMenu'
import AdaptivePlayer from '../player/playerDefault/AdaptivePlayer'
import { isWidthUp, withWidth } from '@material-ui/core'
import { ScreenWidth } from './MainPageLayout'

type FooterProps = {
  width: ScreenWidth,
}

const Footer = ({ width }: FooterProps) => (
  <Layout.Footer className={styles.Footer}>
    <AdaptivePlayer />
    {!isWidthUp('sm', width) && <BottomMenu />}
  </Layout.Footer>
)

export default withWidth()(Footer)
