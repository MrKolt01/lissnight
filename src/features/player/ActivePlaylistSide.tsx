import React from 'react'
import { RootState } from '../../app/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd'
import SideMenuWrapper from '../../components/SideMenuWrapper'
import { setAudio } from './playerSlice'

const ActivePlaylistSide = () => {
  const playlist = useSelector((state: RootState) => state.player.playlist)
  const currentAudio = useSelector(
    (state: RootState) => state.player.currentAudio
  )
  const dispatch = useDispatch()
  return (
    <SideMenuWrapper selectedIdx={currentAudio.id} isControlled>
      {playlist.audios.map((audio) => (
        <Menu.Item
          style={{ paddingLeft: 0 }}
          key={audio.id}
          icon={
            <img
              src={audio.image}
              alt={audio.name}
              height={40}
              width={64}
              style={{ objectFit: 'cover' }}
            />
          }
          onClick={() => dispatch(setAudio(audio))}
        >
          {audio.name}-{audio.artist}
        </Menu.Item>
      ))}
    </SideMenuWrapper>
  )
}

export default ActivePlaylistSide
