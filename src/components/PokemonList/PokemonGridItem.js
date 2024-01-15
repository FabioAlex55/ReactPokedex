
import { typeColorMap } from "../../constants"
import { getPokemonSprite, getTypesGradient } from "../../utils"

export const PokemonGridItem = props => {
    const { pokemon } = props

    const name = `#${pokemon.id} - ${pokemon.name}`
    const background = pokemon.types.length>1 ? getTypesGradient(pokemon.types[0], pokemon.types[1]) : typeColorMap[pokemon.types[0]];
    return (
        <div style={{ padding: '8px 12px', background, width: 'calc(20% - 20px)', margin: '10px', borderRadius: '8px', boxShadow: 'rgb(0 0 0 / 31%) 2px 2px 2px 1px' }}>
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