import { Audio } from '../player/types'

export type Search = {
  searchResult: SearchResult,
}

export type Playlist = {
  id: string,
  name: string,
  url: string,
  thumbnail: string,
}

export type Chanel = {
  id: string,
  name: string,
  url: string,
  thumbnail: string,
}

export type SearchEl = Playlist | Chanel | Audio

export type SearchResult = {
  searchInput: string,
  searchArr: SearchEl[],
}
