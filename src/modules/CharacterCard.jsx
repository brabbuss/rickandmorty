import React from "react";

const CharacterCard = props => {
  const { id, name, status, species, type, gender, image, origin, location, episode } = props.details;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <caption><i>{type && `${type}`}</i></caption>
      <caption><i>{id && `ID:${id}`}</i></caption>
      <p><b>Status</b>: {status}</p>
      <p><b>Origin</b>: <a href={origin.url}>{origin.name}</a></p>
      <p><b>Location</b>: <a href={location.url}>{location.name}</a></p>
      <p><b>Species</b>: {species}</p>
      <p><b>Gender</b>: {gender}</p>
      <p><b>Episode</b>: <a href={episode}>{episode}</a></p>
      <br/>
    </div>
  );
};

export default CharacterCard;
