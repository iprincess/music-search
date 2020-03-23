import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchContainer } from '../containers/SearchContainer';
import { SearchResultsAlbum } from '../components/search/SearchResultsAlbum';

export const AlbumPage = () => {
  const searchType = musicProvider.searchTypes.album;
  let placeholderText = "Search for an album";

  return (
    <SearchContainer
      searchType={searchType}
      searchFormPlaceholder={placeholderText}
      resultsComponent={SearchResultsAlbum}
    />
  );

}
