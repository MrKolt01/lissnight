import React from 'react'
import { Layout } from 'antd'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import LeftSidebar from './LeftSidebar'
import AppBar from './AppBar'
import Content from './Content'
import RightSidebar from './RightSidebar'
import Footer from './Footer'
import PlayerCore from '../player/PlayerCore'

export type ScreenWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type MainPageLayoutProps = {
  width: ScreenWidth,
}

const MainPageLayout = ({ width }: MainPageLayoutProps) => {
  return (
    <Layout
      style={{
        height: '100%',
        minHeight: '-webkit-fill-available',
        maxHeight: '-webkit-fill-available',
      }}
    >
      <Layout>
        {isWidthUp('sm', width) && <LeftSidebar />}
        <Layout
          style={{
            minHeight: '-webkit-fill-available',
            maxHeight: '-webkit-fill-available',
          }}
        >
          <AppBar />
          <Content />
        </Layout>
        {isWidthUp('md', width) && <RightSidebar />}
      </Layout>
      <Footer />
      <PlayerCore />
    </Layout>
  )
}

export default withWidth()(MainPageLayout)
