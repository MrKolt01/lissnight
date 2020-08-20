import styles from './AppBar.module.css'

import React from 'react'
import { Layout } from 'antd'
import SearchInput from '../search/SearchInput'
import HistoryButtons from '../router/HistoryButtons'

const AppBar = () => {
  return (
    <Layout.Header
      className={styles.AppBar}
      style={{ padding: 0, display: 'flex' }}
    >
      <HistoryButtons />
      <SearchInput />
    </Layout.Header>
  )
}

export default AppBar
