export const pokemonList = [
    {
        id: 1,
        name: "Bulbasaur",
        types: ['grass'],
        imageTypes: ['back_default'],
        stats : {
            hp: 50,
            atk:55,
            def:55,
            spAtk: 33,
            spDef: 12,
            spd: 15,
        },
        height:55,
        weight:300,
    

    },
    {
        id: 2,
        name: "Ivysaur",
        types: ['grass'],
        imageTypes: ['back_default'],
        stats : {
            hp: 50,
            atk:55,
            def:55,
            spAtk: 33,
            spDef: 12,
            spd: 15,
        },
        height:55,
        weight:300,
    },
    {
        id: 3,
        name: "Venusaur",
        types: ['grass', 'poison'],
        imageTypes: ['back_default'],
        stats : {
            hp: 50,
            atk:55,
            def:55,
            spAtk: 33,
            spDef: 12,
            spd: 15,
        },
        height:55,
        weight:300,
    }
]


export const imageTypePathMap = {
    back_default: 'pokemon/back',
    back_female: 'pokemon/back/female',
    back_shiny: 'pokemon/back/shiny',
    front_shiny: 'pokemon/shiny',
    front_default: 'pokemon',
}

export const imageTypes = Object.keys(imageTypePathMap)

export const typeColorMap = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
}