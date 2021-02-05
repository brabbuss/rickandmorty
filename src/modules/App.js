import "./App.css";
import React, { useEffect, useState } from "react";
import CharacterCardContainer from "./CharacterCardContainer";
import { getCharacterData } from "./utilities/apiCalls";
import Button from "../ui/Button/Button";
import { H1, H2, H3, H4, H6 } from "../ui/typography/index";
import TitleImage from "../graphics/TitleImage/TitleImage";
// import PageTitle from '../ui/PageTitle/PageTitle' // styled is undefined????

const App = () => {
  const [characterList, setCharacterList] = useState(null);
  const [error, setError] = useState(false);

  const updateCharacters = async () => {
    const charactersData = await getCharacterData();
    if (typeof charactersData === "number") {
      setError(true);
    } else {
      setCharacterList(charactersData.results);
      setError(false);
    }
  };
  // useEffect(async () => {
  //   const charactersData = await getCharacterData();
  //   if (typeof charactersData === "number") {
  //     setError(true);
  //   } else {
  //     setCharacterList(charactersData.results);
  //     setError(false);
  //   }
  // }, []);

  return (
    <header className="App-header">
      <div style={{ minHeight: "100vh", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: "1em" }}>
          <H1>RICK & MORTY FINDER</H1>
          <TitleImage />
        </div>
          <Button margin="4em 0em" theme={"primary"} onClick={updateCharacters}>
            BRAH GET RANDO PEEPS BRAH
          </Button>
      </div>
      {characterList && (
        <CharacterCardContainer characterList={characterList} />
      )}
    </header>
  );
};

export default App;
