import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ActivePlaylistSide from '../player/ActivePlaylistSide'

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} variant={'right'}>
      <ActivePlaylistSide />
    </Sidebar>
  )
}

export default RightSidebar
