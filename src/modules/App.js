import "./App.css";
import React, { Component, useEffect, useState } from "react";
import CharacterCardContainer from "./CharacterCardContainer";
import { getCharacterData } from "./utilities/apiCalls";
// import {sampleDataCharacters} from '../sampleData/sampleDataCharacters'

const App = () => {
  
  const [characterList, setCharacterList] = useState([])
  const [error, setError] = useState(false)
  // state = {
  //   allCharacters: {},
  // };

  useEffect(async () => {
    const charactersData = await getCharacterData();
    if (typeof charactersData === "number") {
      setError(true)
    } else {
      setCharacterList(charactersData.results)
      setError(false)
    }
  },[])

  return (
    <header className="App-header">
      <CharacterCardContainer characterList={characterList} />
    </header>
  )
}

export default App;
