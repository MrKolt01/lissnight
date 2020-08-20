import React, { useState } from 'react'
import SideMenu from '../menu/SideMenu/SideMenu'
import Sidebar from './Sidebar'
import { MenuLogo } from '../../components/Brand'

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <MenuLogo isOpen={isOpen} />
      <SideMenu isOpen={isOpen} />
    </Sidebar>
  )
}

export default LeftSidebar
