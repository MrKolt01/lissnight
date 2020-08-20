import { Audio, Player, Playlist } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Player = {
  currentAudio: {
    id: 'audioId',
    name: 'name',
    artist: 'artist',
    url: 'https://puvel.ru:8033/redirect?s=youtube&id=BaACrT6Ydik',
    image:
      'https://avatars.mds.yandex.net/get-pdb/1209255/1c6287f2-dbe1-4adc-8273-365ddc1c878b/s1200',
    maxTime: 100,
  },
  nextAudio: {
    id: 'audioId2',
    name: 'name2',
    artist: 'artist2',
    url: 'https://puvel.ru:8033/redirect?s=youtube&id=KWmShaIIF0I',
    image:
      'https://avatars.mds.yandex.net/get-pdb/1209255/1c6287f2-dbe1-4adc-8273-365ddc1c878b/s1200',
    maxTime: 100,
  },
  prevAudio: {
    id: 'audioId3',
    name: 'name3',
    artist: 'artist3',
    url: 'https://puvel.ru:8033/redirect?s=youtube&id=PQN9vATeD-w',
    image:
      'https://avatars.mds.yandex.net/get-pdb/1209255/1c6287f2-dbe1-4adc-8273-365ddc1c878b/s1200',
    maxTime: 100,
  },
  playlist: {
    id: 'playlistId',
    name: 'PlaylistName',
    url: 'PlaylistUrl',
    audios: [
      {
        id: 'audioId',
        name: 'name',
        artist: 'artist',
        url: 'https://puvel.ru:8033/redirect?s=youtube&id=BaACrT6Ydik',
        image:
          'https://avatars.mds.yandex.net/get-pdb/1209255/1c6287f2-dbe1-4adc-8273-365ddc1c878b/s1200',
        maxTime: 100,
      },
      {
        id: 'audioId2',
        name: 'name2',
        artist: 'artist2',
        url: 'https://puvel.ru:8033/redirect?s=youtube&id=KWmShaIIF0I',
        image:
          'https://avatars.mds.yandex.net/get-pdb/1209255/1c6287f2-dbe1-4adc-8273-365ddc1c878b/s1200',
        maxTime: 100,
      },
      {
        id: 'audioId3',
        name: 'name3333333333333333333',
        artist: 'artist3',
        url: 'https://puvel.ru:8033/redirect?s=youtube&id=PQN9vATeD-w',
        image:
          'https://avatars.mds.yandex.net/get-pdb/1209255/1c6287f2-dbe1-4adc-8273-365ddc1c878b/s1200',
        maxTime: 100,
      },
    ],
  },
  isShuffle: false,
  isPlaying: false,
  isLoop: false,
  volume: 100,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setAudio(state, action: PayloadAction<Audio>) {
      if (state.currentAudio.id !== action.payload.id) {
        state.currentAudio = action.payload
        state.isPlaying = true
      } else {
        state.isPlaying = !state.isPlaying
      }
    },
    setPlaylist(
      state,
      action: PayloadAction<{ playlist: Playlist, audio: Audio }>
    ) {
      state.currentAudio = action.payload.audio
      state.playlist = action.payload.playlist
    },
    playNext(state) {
      let idx = getAudioIdx(state.nextAudio, state.playlist.audios)
      idx = idx + 1 < state.playlist.audios.length ? idx + 1 : 0
      state.prevAudio = state.currentAudio
      state.currentAudio = state.nextAudio
      state.nextAudio = state.playlist.audios[idx]
      state.isPlaying = true
    },
    playPrev(state) {
      let idx = getAudioIdx(state.prevAudio, state.playlist.audios)
      idx = idx > 0 ? idx - 1 : state.playlist.audios.length - 1
      state.nextAudio = state.currentAudio
      state.currentAudio = state.prevAudio
      state.prevAudio = state.playlist.audios[idx]
      state.isPlaying = true
    },
    setPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload
    },
    setLoop(state, action: PayloadAction<boolean>) {
      state.isLoop = action.payload
    },
    setShuffle(state, action: PayloadAction<boolean>) {
      state.isShuffle = action.payload
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload
    },
  },
})

const getAudioIdx = (audio: Audio, audios: Audio[]): number => {
  return audios.findIndex((el) => el.id === audio.id)
}

export const {
  setAudio,
  setPlaylist,
  playNext,
  playPrev,
  setPlaying,
  setLoop,
  setShuffle,
  setVolume,
} = playerSlice.actions

export default playerSlice.reducer
