import { imageTypePathMap } from "../../constants"
import { getPokemonSprite } from "../../utils"

export const PokemonDetailsImages = props =>{
    const { pokemon } = props
    return (
        <div>
            <div>
                <img src = { getPokemonSprite(pokemon.id)}/>
            </div>
            <div style={{ display:"flex", padding: "4px",}}>
                {pokemon.imageTypes.map(imageType => (
                    <img width="50%" src={getPokemonSprite(pokemon.id, imageTypePathMap[imageType])} />
                ))}
            </div>
        </div>

    )
}