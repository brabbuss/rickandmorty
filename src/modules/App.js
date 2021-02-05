import "./App.css";
import React, { useEffect, useState } from "react";
import CharacterCardContainer from "./CharacterCardContainer";
import { getCharacterData } from "./utilities/apiCalls";
import Button from '../ui/Button/Button'
import {H1, H2, H3, H4, H6} from '../ui/typography/index'
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
      <H1>RICK & MORTY FINDER</H1>
      <H6>WUBBALUBBADUBDUB</H6>
      <Button margin='10em 0em' theme={'primary'}>GET MOAR</Button>
      <CharacterCardContainer characterList={characterList} />
    </header>
  )
}

export default App;
