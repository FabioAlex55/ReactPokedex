import { typeColorMap } from "../../constants";
import { getTypesGradient } from "../../utils";
import { PokemonDetailsImages } from "./PokemonDetailsImages";
import { PokemonDetailsProperties } from "./PokemonDetailsProperties";
import { PokemonDetailsStats } from "./PokemonDetailsStats";

export const PokemonDetail = props => {
    const { pokemon } = props

    const name = `#${pokemon.id} - ${pokemon.name}`
    const background = pokemon.types.length > 1 ? getTypesGradient(pokemon.types[0], pokemon.types[1]) : typeColorMap[pokemon.types[0]];

    return (
        <>
            <div style={{background}}>
                <div style={{ display: "flex" }}>
                    <div>
                        <PokemonDetailsImages pokemon={pokemon} />
                    </div>
                    <div>
                        <PokemonDetailsProperties pokemon={pokemon} />
                    </div>
                </div>
                <PokemonDetailsStats pokemon={pokemon} />
            </div>
        </>
    )
}