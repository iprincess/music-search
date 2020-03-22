import React from 'react';
import { SearchResultItem } from './SearchResultItem';

export const SearchResults =(props:{results:any[]}) => {

  if(props.results === null){
    return null;

  } else if (props.results && props.results.length) {
    const items = props.results.map(
      (item) => {
        return <li key={item.collectionId}><SearchResultItem {...item} /></li>
      }
    );

    return (
      <ul className="container container-row">{items}</ul>
    );
  }
  return (<p className="no-results">No results found. Please search again.</p>)

}
