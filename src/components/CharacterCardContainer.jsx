import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterCardContainer = props => {
  const {allCharacters} = props

  const characterList = () => (
    !allCharacters.length 
    ? <h1>Consulting the Citadel of Ricks</h1>
    : allCharacters.map(character => (
      <CharacterCard
        key={character.id}
        details={character}
      />
    ))
  )

  return (
    <div>
      {characterList()}
    </div>
   );
}
 
export default CharacterCardContainer;