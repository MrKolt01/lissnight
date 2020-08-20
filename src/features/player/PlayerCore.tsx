import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/reducer'
import { playNext, playPrev, setPlaying, setVolume } from './playerSlice'

const PlayerCore = () => {
  const playerRef = useRef<HTMLAudioElement>(null)

  const dispatch = useDispatch()

  const currentAudio = useSelector(
    (state: RootState) => state.player.currentAudio
  )
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying)
  const isLoop = useSelector((state: RootState) => state.player.isLoop)
  const volume = useSelector((state: RootState) => state.player.volume)

  const onEnded = () => {
    dispatch(playNext())
  }

  useEffect(() => {
    const localVolume = localStorage.getItem('volume')
    if (!localVolume) {
      localStorage.setItem('volume', String(volume))
    } else {
      dispatch(setVolume(+localVolume))
    }
  }, [])
  useEffect(() => {
    if (navigator.mediaSession) {
      navigator.mediaSession.setActionHandler('previoustrack', () =>
        dispatch(playPrev())
      )
      navigator.mediaSession.setActionHandler('nexttrack', () =>
        dispatch(playNext())
      )
      navigator.mediaSession.setActionHandler('play', () =>
        dispatch(setPlaying(true))
      )
      navigator.mediaSession.setActionHandler('pause', () =>
        dispatch(setPlaying(false))
      )
    }
    if (playerRef.current) {
      playerRef.current.onended = onEnded
    }
    // eslint-disable-next-line
  }, [dispatch])
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = (100 ** (Number(volume) / 100) - 1) / 100
    }
  }, [volume])
  useEffect(() => {
    if (playerRef.current) {
      isPlaying ? playerRef.current.play() : playerRef.current.pause()
    }
  }, [isPlaying])
  useEffect(() => {
    if (playerRef.current) {
      isPlaying ? playerRef.current.play() : playerRef.current.pause()
    }
    if (navigator.mediaSession) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentAudio.name,
        artist: currentAudio.artist,
        artwork: [
          { src: currentAudio.image, sizes: '256x256', type: 'image/png' },
        ],
      })
    }
    // eslint-disable-next-line
  }, [currentAudio])

  return (
    <audio
      id={'player'}
      preload={'auto'}
      loop={isLoop}
      src={currentAudio.url}
      ref={playerRef}
    />
  )
}

export default PlayerCore
