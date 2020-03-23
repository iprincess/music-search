import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchContainer } from '../containers/SearchContainer';
import { SearchResultsArtist } from '../components/search/SearchResultsArtist';

export const ArtistPage = () => {
  const searchType = musicProvider.searchTypes.artist;
  let placeholderText = "Search for an artist";

  return (
    <SearchContainer
      searchType={searchType}
      searchFormPlaceholder={placeholderText}
      resultsComponent={SearchResultsArtist}
    />
  );

}
