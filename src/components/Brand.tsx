import React from 'react'
import './Brand.css'

type OpenProps = {
  isOpen: boolean,
}

const Brand = ({ isOpen }: OpenProps) => {
  return (
    <div className={'Brand'}>
      <img height={50} width={50} src={require('./LissNight.png')} />
      {isOpen && (
        <img
          src={require('./LissNightText.png')}
          height={30}
          style={{ paddingTop: '5px' }}
        />
      )}
    </div>
  )
}

export const MenuLogo = ({ isOpen = true }: OpenProps) => {
  return (
    <div className={'MenuLogo'}>
      <Brand isOpen={isOpen} />
    </div>
  )
}

export default Brand
