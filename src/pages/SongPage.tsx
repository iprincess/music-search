import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchPage } from './SearchPage';
import { SearchResultsSong } from '../components/search/SearchResultsSong';

export const SongPage = () => {
  const searchType = musicProvider.searchTypes.song;
  let placeholderText = "Search for a song";

  return (
    <SearchPage
      searchType={searchType}
      searchFormPlaceholder={placeholderText}
      resultsComponent={SearchResultsSong}
    />
  );

}
