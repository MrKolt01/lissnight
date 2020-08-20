import React from 'react'
import { useHistory } from 'react-router-dom'
import { Divider, Drawer, List, ListSubheader } from '@material-ui/core'
import styles from './SideMenu.module.css'
import './SideMenu.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded'
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded'
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded'
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded'
import MenuItem from './MenuItem'

type SideMenuProps = {
  isOpen: boolean,
}

const SideMenu = ({ isOpen }: SideMenuProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const handleListItemClick = (index: React.SetStateAction<number>) => {
    setSelectedIndex(index)
  }

  const history = useHistory()

  const onHomeClick = () => {
    handleListItemClick(0)
    history.push('/')
  }

  const onSearchClick = () => {
    handleListItemClick(1)
    history.push('/search')
  }

  const onPlaylistClick = () => {
    history.push('/playlist')
  }

  const onMediaCollectionClick = () => {
    handleListItemClick(2)
    history.push('/collection')
  }

  return (
    <Drawer
      variant={'permanent'}
      classes={{
        paper: styles.Menu,
      }}
    >
      <List>
        <MenuItem
          isOpen={isOpen}
          isSelected={selectedIndex === 0}
          onClick={onHomeClick}
          text={'Главная'}
        >
          <HomeRoundedIcon />
        </MenuItem>
        <MenuItem
          isOpen={isOpen}
          isSelected={selectedIndex === 1}
          onClick={onSearchClick}
          text={'Поиск'}
        >
          <SearchRoundedIcon />
        </MenuItem>
        <MenuItem
          isOpen={isOpen}
          isSelected={selectedIndex === 2}
          onClick={onMediaCollectionClick}
          text={'Моя медиатека'}
        >
          <QueueMusicRoundedIcon />
        </MenuItem>
      </List>
      <List
        style={{ marginTop: '24px' }}
        subheader={
          <ListSubheader
            className={styles.SubHeader}
            classes={{ root: 'ellipsis-one-line' }}
          >
            ПЛЕЙЛИСТЫ
          </ListSubheader>
        }
      >
        <MenuItem
          isSelected={false}
          isOpen={isOpen}
          onClick={() => {}}
          text={'Создать плейлист'}
        >
          <AddBoxRoundedIcon />
        </MenuItem>
        <MenuItem
          isSelected={selectedIndex === 3}
          isOpen={isOpen}
          text={'Любимые треки'}
          onClick={() => {
            setSelectedIndex(3)
          }}
        >
          <FavoriteRoundedIcon />
        </MenuItem>
        <MenuItem
          isSelected={selectedIndex === 4}
          isOpen={isOpen}
          text={'Проигрываемые'}
          onClick={() => {
            setSelectedIndex(4)
          }}
        >
          <VolumeUpRoundedIcon />
        </MenuItem>
        <MenuItem
          isSelected={selectedIndex === 5}
          isOpen={isOpen}
          text={'Недавнее'}
          onClick={() => {
            setSelectedIndex(5)
          }}
        >
          <HistoryRoundedIcon />
        </MenuItem>
        <Divider />
        <MenuItem
          isSelected={selectedIndex === 6}
          isOpen={isOpen}
          text={'Плейлист 1'}
          onClick={() => {
            setSelectedIndex(6)
          }}
        >
          <LoyaltyRoundedIcon />
        </MenuItem>
        <MenuItem
          isSelected={selectedIndex === 7}
          isOpen={isOpen}
          text={'Плейлист 2'}
          onClick={() => {
            setSelectedIndex(7)
          }}
        >
          <LoyaltyRoundedIcon />
        </MenuItem>
      </List>
    </Drawer>
  )
}

export default SideMenu
