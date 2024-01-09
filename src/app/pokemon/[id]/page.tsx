"use client"
import { pokemonList } from '@/constants'
import { useParams } from 'next/navigation'
import { PokemonDetail } from '../../../components/PokemonDetails/PokemonDetail'

export default function PokemonDetailPage() {
    const query = useParams()
    const pokemonId = parseInt(query.id as string)
  return (
    <main >
        <PokemonDetail pokemon={pokemonList.find(pokemon => pokemon.id === pokemonId)} />
    </main>
  )
}
