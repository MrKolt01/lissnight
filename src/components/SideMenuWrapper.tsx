import styles from './SideMenuWrapper.module.css'
import React, { FC } from 'react'
import { Menu } from 'antd'

type SideMenuWrapperProps = {
  selectedIdx: string,
  isControlled?: boolean,
}

const SideMenuWrapper: FC<SideMenuWrapperProps> = ({
  selectedIdx = '1',
  isControlled = false,
  children,
}) => {
  return (
    <>
      {isControlled ? (
        <Menu
          className={styles.Menu}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedIdx]}
          selectedKeys={[selectedIdx]}
        >
          {children}
        </Menu>
      ) : (
        <Menu
          className={styles.Menu}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {children}
        </Menu>
      )}
    </>
  )
}

export default SideMenuWrapper
