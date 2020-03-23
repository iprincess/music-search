import React from 'react';
import MediaCard from '../shared/mediaCard/MediaCard';

export const SearchResults =(props:{mediaCardMap: Function; results:any[]}) => {

  if(!props.results) {
    return null;
  }

  const items = props.results && props.results.map(
    (item, index) => {
      const mediaCardProps = props.mediaCardMap(item);
      return (
        <li key={index}>
          <MediaCard {...mediaCardProps} />
        </li>
      );
    }
  );

  return (
    items.length ?
    <ul className="flex-container flex-wrap center-content">{items}</ul> :
    <p className="no-results">No results found. Please search again.</p>
  );
}
