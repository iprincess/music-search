import './SearchPage.css';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as musicProvider from './../../providers/music-provider';
import { queryUtil } from './../../helpers/queryUtil';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';


export const SearchPage = () => {
  const params = useParams();
  const history = useHistory();
  const [query, setQuery] = useState(params.query ? queryUtil.getQueryFromUrlParam(params.query) : '');
  const searchType = params.type ?? musicProvider.searchTypes.album;
  const [results, setResults] = useState(null);
  
  let placeholderText = "Search for an album";
  if(searchType === musicProvider.searchTypes.artist){
    placeholderText = "Search for an artist";
  } else if (searchType === musicProvider.searchTypes.song) {
    placeholderText = "Search for a song"
  }

  const onQueryChangeHandler = (q) => {
    if (q !== '' && q !== query) {
      setQuery(q);
      const queryUrlParam = queryUtil.getUrlParamFromQuery(q);
      history.push('/' + searchType + '/' + queryUrlParam);
    }
  }

  useEffect( () => {
    if(query && query !== ''){
      musicProvider.searchEntityAsync(searchType, query)
        .then(response => {
          console.log(response);
          setResults(response.results);
        })
        .catch(error => {
          console.log("SearchPage music request error", error);
        })
    }
  }, [query])

  return (
    <div className="search-page">
      <div>
        <SearchForm 
          query={query} 
          onQueryChangeHandler={onQueryChangeHandler} 
          placeholder={placeholderText}
          />
      </div>
      <div>
        <SearchResults results={results} />
      </div>
    </div>
  );

}
