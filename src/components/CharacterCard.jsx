import React from "react";

const CharacterCard = props => {
  const { id, name, status, species, type, gender, image, origin, location, episode } = props.details;

  return (
    <div>
      <span>
        <h2>{name} {type && `(${type} ID: ${id})`}</h2>
      </span>
      <img src={image} alt="" />
      <p><b>Status</b>: {status}</p>
      <p><b>Origin</b>: {origin.name}</p>
      <p><b>Location</b>: {location.name}</p>
      <p><b>Species</b>: {species}</p>
      <p><b>Gender</b>: {gender}</p>
      <p><b>Episode</b>: <a href={episode}>{episode}</a></p>
      <br/>
    </div>
  );
};

export default CharacterCard;
