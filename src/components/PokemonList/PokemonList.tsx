"use client"
import { FC, useState } from "react";
import { GridListSelector} from './GridListSelector'
import { PokemonView } from './PokemonView'
import { Pokemon } from "@/constants";

type PokemonListProps = {
    pokemonList: Pokemon[]
}

// pokemon list
export const PokemonList: FC<PokemonListProps> = (props) => {
  const [view, setView] = useState('list')

  return (
    <div className="App">
        <style dangerouslySetInnerHTML={{ __html: '* { box-sizing: border-box }' }} />
      <header className="App-header">
        <GridListSelector
          view={view}
          changeHandler={(event: any) => setView(event.target.value)}
        />
      </header>
      <PokemonView
        pokemonList={props.pokemonList}
        view={view}
      />
    </div>
  );
}

export default PokemonList
