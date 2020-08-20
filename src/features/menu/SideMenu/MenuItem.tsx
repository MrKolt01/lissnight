import React, { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import styles from './SideMenu.module.css'

type MenuItemProps = {
  isSelected: boolean,
  isOpen: boolean,
  onClick: () => void,
  text: string,
}

const MenuItem: FC<MenuItemProps> = ({
  isSelected,
  isOpen,
  onClick,
  text,
  children,
}) => {
  return (
    <ListItem
      button
      selected={isSelected}
      onClick={onClick}
      className={styles.ListEl}
      classes={{ selected: styles.ListElSelected }}
    >
      <ListItemIcon className={isSelected ? styles.IconSelected : styles.Icon}>
        {children}
      </ListItemIcon>
      {isOpen && (
        <ListItemText primary={text} classes={{ primary: styles.Text }} />
      )}
    </ListItem>
  )
}

export default MenuItem
