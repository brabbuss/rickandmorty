import React from "react";

const CharacterCard = props => {
  const { id, name, status, species, type, gender, image, origin, location, episode } = props.details;

  const getEpisodeNo = (episodeUrl) => {
    let splitUrl = episodeUrl.split('/')
    let length = splitUrl.length
    return splitUrl[length - 1]
  }

  const episodeList = () => {
    // const episodes = episode.map(ep => <li><a href={ep}>Ep {getEpisodeNo(ep)}</a></li>)
    const episodes = episode.map(ep => <a href={ep}> #{getEpisodeNo(ep)},</a>)
    const list = episodes
      // <ul>
      //   {episodes}
      // </ul>
    
    
      
    return list
  }

  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p><i>{type && `${type}`}</i></p>
      {/* <p><i>{id && `ID:${id}`}</i></p> */}
      <span><h5><b>Status:</b></h5><p style={{borderRadius: '5px', padding:'0 .6em', color:'black', backgroundColor: `${status === 'Alive' ? 'green' : 'red'}`, fontWeight: '800'}}>{status}</p></span>
      <span><h5><b>Origin:</b></h5> <p><a href={origin.url}>{origin.name}</a></p></span>
      <span><h5><b>Location:</b></h5> <p><a href={location.url}>{location.name}</a></p></span>
      <span><h5><b>Species:</b></h5> <p>{species}</p></span>
      <span><h5><b>Gender:</b></h5> <p>{gender}</p></span>
      <span><h5><b>Episode:</b></h5> <p>{episodeList()}</p></span>
      <br/>

      <style jsx>{`
        span {
          display: flex;
          align-items: center;
        }
        article {
          color: salmon;
          display: block;
          padding: 2em;
          flex:.33;
          max-width: min-content;
        }
        article img {
          // width: 100%;
          align-self: center;
        }
        article h2 {
          background-color: salmon;
          color: black;
          border-radius: 4px;
          text-align: center;
          font-size: 2rem;
          padding: 20px;
          font-weight: 900;
        }
        article h5 {
          // padding:10px;
          margin: 5px 5px;
        }
        article p {
          font-size: 1.5rem;
          text-wrap: wrap;
          font-weight: 300;
          padding:0;
          margin:10px;
        }
        article a {
          text-decoration: none;
          color: hotpink;
          font-weight: 500;
          border-bottom: solid 1px hotpink;
        }
      `}
      </style>
    </article>
  );
};

export default CharacterCard;
