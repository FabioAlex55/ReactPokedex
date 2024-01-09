export const PokemonDetailsStats = props => {
    const { pokemon } = props

    return (
        <div style={{ display: "flex" }}>
            {Object.entries(pokemon.stats).map(
                ([key, value]) => <p>{key}: {value}</p>
            )}
        </div>
    )
}

