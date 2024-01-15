import { PokemonGridItem } from "./PokemonGridItem"
import { PokemonListItem } from "./PokemonListItem"

export const PokemonView = props => {
    const {
        pokemonList,
        view,
    } = props

    const PokemonViewItem = view === 'list'
        ? PokemonListItem
        : PokemonGridItem

    return (
        <div style={view === 'grid' ? { display: 'flex', flexWrap: 'wrap' } : {}}>
            {pokemonList.map(pokemon => (
                <PokemonViewItem
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}