import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchPage } from './SearchPage';
import { SearchResultsArtist } from '../components/search/SearchResultsArtist';

export const ArtistPage = () => {
  const searchType = musicProvider.searchTypes.artist;
  let placeholderText = "Search for an artist";

  return (
    <SearchPage
      searchType={searchType}
      searchFormPlaceholder={placeholderText}
      resultsComponent={SearchResultsArtist}
    />
  );

}
