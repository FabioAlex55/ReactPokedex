import { getPokemonSprite, getTypesGradient } from "../../utils"
import { typeColorMap } from "../../constants"
import Link from "next/link"

export const PokemonListItem = props => {
    const { pokemon } = props 

    const name = `#${pokemon.id} - ${pokemon.name}`
    const background = pokemon.types.length>1 ? getTypesGradient(pokemon.types[0], pokemon.types[1]) : typeColorMap[pokemon.types[0]];

    return (
        <div style={{ display: "flex", background , padding: '4px'}}>
            <div>
                <img src={getPokemonSprite(pokemon.id)}></img>
            </div>
            <div>
                <p>{name}</p>
                <div style={{ display: "flex"}}>
                    {pokemon.types.map(type =>(
                        <p style={{ padding: "10px"}} >{type}</p>
                    ))}
                </div>
                    <Link href={`/pokemon/${pokemon.id}`}> See more</Link>
            </div>

        </div>
    )
}