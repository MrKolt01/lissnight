import styles from './Sidebar.module.css'
import './Sidebar.css'
import React, { FC, useEffect, useState } from 'react'
import { Layout } from 'antd'
import { isWidthUp, withWidth } from '@material-ui/core'
import { ScreenWidth } from './MainPageLayout'

interface SidebarProps {
  variant?: string;
  width: ScreenWidth;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
  variant = 'left',
  width,
  isOpen,
  setIsOpen,
  children,
}) => {
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!isWidthUp('md', width)) {
      setIsOpen(false)
    }
  }, [width])

  return (
    <Layout.Sider
      reverseArrow={variant === 'right'}
      collapsible
      collapsed={!isOpen}
      onCollapse={toggle}
      className={styles.Sidebar}
      width={232}
    >
      {children}
    </Layout.Sider>
  )
}

export default withWidth()(Sidebar)
