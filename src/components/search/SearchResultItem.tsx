import React from 'react';
import MediaCard from '../shared/mediaCard/MediaCard'

export const SearchResultItem = (props:ISearchResultItem) => {
  // map search result to media card
  let mediaCardProps = {
    imageSrc: props.artworkUrl100,
    imageAlt: 'album artwork for ' + props.collectionName,
    title: props.collectionName,
    text: props.artistName,
    buttonText: "View on Apple Music",
    link: props.collectionViewUrl
  }

  return (
    <MediaCard  {...mediaCardProps} />
  );
}