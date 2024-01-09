"use client"
import { useState } from "react";
import { GridListSelector} from '../components/PokemonList/GridListSelector'
import { PokemonView } from '../components/PokemonList/PokemonView'
import { pokemonList } from '../constants'

// pokemon list
export default function Home() {
  const [view, setView] = useState('list')

  return (
    <div className="App">
      <header className="App-header">
        <GridListSelector
          view={view}
          changeHandler={(event: any) => setView(event.target.value)}
        />
      </header>
      <PokemonView
        pokemonList={pokemonList}
        view={view}
      />
    </div>
  );
}
