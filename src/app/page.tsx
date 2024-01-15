import PokemonList from "@/components/PokemonList/PokemonList"
import { Pokemon } from "@/constants"

type ListResponseType = {
  count: number
  results: {
    name: string
    url: string
  }[]
}

type ResponseTypeStats =  {
  base_stat: number
  stat: {
    name: string
  }
}

type ResponseTypeType =  {
  type: {
    name: string
  }
}

type ResponseType = {
  height: number
  weight: number
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  },
  stats: ResponseTypeStats[]
  types: ResponseTypeType[]
  id: number
  name: string
}

const typeMapper = (type: ResponseTypeType) => type.type.name

const Home = async () => {
  // ir buscar lista de pokemons
  const staticData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
  const staticDataResult = await staticData.json() as ListResponseType

  const pokemonDetails = await Promise.all(
    staticDataResult.results.map(async pokemon => {
      const res = await fetch(pokemon.url)
      return await res.json() as ResponseType
    })
  )

  const pokemonList: Pokemon[] = pokemonDetails.map(pokemonResponse => ({
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    types: pokemonResponse.types.map(typeMapper),
    imageTypes: ["back_default", "front_shiny", "back_shiny"],
    stats: {
      hp: pokemonResponse.stats[0].base_stat,
      atk: pokemonResponse.stats[1].base_stat,
      def: pokemonResponse.stats[2].base_stat,
      spAtk: pokemonResponse.stats[3].base_stat,
      spDef: pokemonResponse.stats[4].base_stat,
      spd: pokemonResponse.stats[5].base_stat,
    },
    height: pokemonResponse.height,
    weight: pokemonResponse.weight
  }))

  return <PokemonList pokemonList={pokemonList} />
}

// pokemon list
export default Home