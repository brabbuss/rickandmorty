import "./App.css";
import React, { Component } from "react";
import CharacterCardContainer from "./components/CharacterCardContainer";
import { getCharacterData } from "./components/utilities/apiCalls";
import {sampleDataCharacters} from './sampleData/sampleDataCharacters'

class App extends Component {
  state = {
    allCharacters: {},
    // allCharacters: sampleDataCharacters.results || {},
    // error: false
  };

  componentDidMount = async () => {
    const charactersData = await getCharacterData();
    typeof charactersData === "number"
      ? this.setState({ error:true })
      : this.setState({ allCharacters: charactersData.results, error:false });
  };

  render() {
    return (
      <header className="App-header">
        <CharacterCardContainer allCharacters={this.state.allCharacters} />
      </header>
    );
  }
}

export default App;
