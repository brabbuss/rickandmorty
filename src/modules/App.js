import "./App.css";
import React, { useEffect, useState } from "react";
import CharacterCardContainer from "./CharacterCardContainer";
import { getCharacterData } from "./utilities/apiCalls";
import Button from '../ui/Button/Button'
// import PageTitle from '../ui/PageTitle/PageTitle' // styled is undefined????

const App = () => {
  
  const [characterList, setCharacterList] = useState([])
  const [error, setError] = useState(false)

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
      <h1>WUBBALUBBADUBDUB</h1>
      <Button theme={'primary'}>GET MOAR</Button>
      <CharacterCardContainer characterList={characterList} />
    </header>
  )
}

export default App;
