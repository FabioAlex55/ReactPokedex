
import { typeColorMap } from "../../constants"
import { getPokemonSprite, getTypesGradient } from "../../utils"

export const PokemonGridItem = props => {
    const { pokemon } = props

    const name = `#${pokemon.id} - ${pokemon.name}`
    const background = pokemon.types.length>1 ? getTypesGradient(pokemon.types[0], pokemon.types[1]) : typeColorMap[pokemon.types[0]];
    return (
        <div style={{ padding: '4px', background }}>
            <img src={getPokemonSprite(pokemon.id)} />
            <h6>{name}</h6>
            <div style={{ display: 'flex' }}>
                {pokemon.types.map(type => (
                    <p style={{ padding: "3px" }} >{type}</p>
                ))}
            </div>
        </div>
    )
}