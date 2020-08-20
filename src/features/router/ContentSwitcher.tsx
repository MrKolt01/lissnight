import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PlaylistContent from '../playlist/PlaylistContent'
import SearchContent from '../search/SearchContent'
import HomeContent from '../home/HomeContent'
import MediaCollectionContent from '../mediaCollection/MediaCollectionContent'

const ContentSwitcher = () => {
  return (
    <Switch>
      <Route path="/collection">
        <MediaCollectionContent />
      </Route>
      <Route path="/playlist">
        <PlaylistContent />
      </Route>
      <Route path="/search">
        <SearchContent />
      </Route>
      <Route path="/">
        <HomeContent />
      </Route>
    </Switch>
  )
}

export default ContentSwitcher
