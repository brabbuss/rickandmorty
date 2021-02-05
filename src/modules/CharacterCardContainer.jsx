import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterCardContainer = ({children, characterList}) => {

  const mapCharacterList = () => (
    !characterList
    ? <h1>Consulting the Citadel of Ricks</h1>
    : characterList.map(character => (
      <CharacterCard
        key={character.id}
        details={character}
      />
    ))
  )

  return (
    <div>
      {mapCharacterList()}

      <style jsx>{`
        header div {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}
      </style>
    </div>
   );
}
 
export default CharacterCardContainer;