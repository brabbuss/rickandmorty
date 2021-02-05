import React from "react";

const CharacterCard = props => {
  const { id, name, status, species, type, gender, image, origin, location, episode } = props.details;

  return (
    <article>
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

      <style jsx>{`
        article {
          color: salmon;
          display: block;
          padding: 2em;
          flex:.33;
          max-width: min-content;
        }
        h2 {
          background-color: salmon;
          color: black;
          border-radius: 4px;
          text-align: center;
          font-size: 3rem;
          padding: 1rem;
          font-weight: 900;
        }
        img {
          width: 100%;
        }
        div {
          align-self: center;
        }
      `}
      </style>
    </article>
  );
};

export default CharacterCard;
