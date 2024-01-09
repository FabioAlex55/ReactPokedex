import { imageTypePathMap, typeColorMap } from "./constants"

export const getPokemonSprite = (pokemonId, spriteType = imageTypePathMap.front_default) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${spriteType}/${pokemonId}.png`
}

export const getTypesGradient = (type1, type2)=>{
    return `linear-gradient(90deg, ${typeColorMap[type1]} 0%, ${typeColorMap[type2]} 100%)`
}