export type Audio = {
  id: string,
  name: string,
  artist: string,
  url: string,
  image: string,
  maxTime: number,
  videoUrl?: string,
}

export type Playlist = {
  id: string,
  url: string,
  audios: Audio[],
  name: string,
}

export type Player = {
  currentAudio: Audio,
  nextAudio: Audio,
  prevAudio: Audio,
  isPlaying: boolean,
  isShuffle: boolean,
  isLoop: boolean,
  playlist: Playlist,
  volume: number,
}
