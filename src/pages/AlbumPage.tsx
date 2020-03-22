import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchPage } from './SearchPage';
import { SearchResultsAlbum } from '../components/search/SearchResultsAlbum';

export const AlbumPage = () => {
  const searchType = musicProvider.searchTypes.album;
  let placeholderText = "Search for an album";

  return (
    <SearchPage
      searchType={searchType}
      searchFormPlaceholder={placeholderText}
      resultsComponent={SearchResultsAlbum}
    />
  );

}
