import styles from './Content.module.css'
import React from 'react'
import { Layout } from 'antd'
import ContentSwitcher from '../router/ContentSwitcher'

const Content = () => {
  return (
    <Layout.Content className={styles.Content}>
      <ContentSwitcher />
    </Layout.Content>
  )
}

export default Content
