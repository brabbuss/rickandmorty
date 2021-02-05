import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterCardContainer = ({characterList}) => {

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
    </div>
   );
}
 
export default CharacterCardContainer;