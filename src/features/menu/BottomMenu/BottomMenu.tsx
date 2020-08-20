import React, { useState } from 'react'
import './BottomMenu.css'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import HomeIconOutlined from '@material-ui/icons/HomeOutlined'
import HeadsetIcon from '@material-ui/icons/Headset'
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined'
import SearchIcon from '@material-ui/icons/Search'
import SearchIconOutlined from '@material-ui/icons/SearchOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AccountCircleIconOutlined from '@material-ui/icons/AccountCircleOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
  },
  button: {
    color: 'rgba(255,255,255,0.5)',
  },
})

const BottomMenu = () => {
  const styles = useStyles()
  const [value, setValue] = useState('home')
  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue)
  }

  const history = useHistory()

  const onHomeClick = () => {
    history.push('/')
  }

  const onSearchClick = () => {
    history.push('/search')
  }

  const onPlaylistClick = () => {
    history.push('/playlist')
  }

  const onMediaCollectionClick = () => {
    history.push('/collection')
  }

  return (
    <BottomNavigation
      className={styles.root}
      value={value}
      onChange={handleChange}
      showLabels={true}
    >
      <BottomNavigationAction
        className={styles.button}
        label="Главная"
        value="home"
        icon={<>{value === 'home' ? <HomeIcon /> : <HomeIconOutlined />}</>}
        onClick={onHomeClick}
      />
      <BottomNavigationAction
        className={styles.button}
        label="Поиск"
        value="search"
        icon={
          <>{value === 'search' ? <SearchIcon /> : <SearchIconOutlined />}</>
        }
        onClick={onSearchClick}
      />
      <BottomNavigationAction
        className={styles.button}
        label="Медиатека"
        value="playlists"
        icon={
          <>
            {value === 'playlists' ? <HeadsetIcon /> : <HeadsetOutlinedIcon />}
          </>
        }
        onClick={onMediaCollectionClick}
      />
      <BottomNavigationAction
        className={styles.button}
        label="Аккаунт"
        value="account"
        icon={
          <>
            {value === 'account' ? (
              <AccountCircleIcon />
            ) : (
              <AccountCircleIconOutlined />
            )}
          </>
        }
      />
    </BottomNavigation>
  )
}

export default BottomMenu
