export const PokemonDetailsProperties = props => {
    const { pokemon} = props

    const name = `#${pokemon.id} - ${pokemon.name}`


    return(
        <div>
            <div>
                <p>{name}</p>
            </div>
            <div>
                {pokemon.types.map(type =>(
                    <p style={{ padding: "10px"}} > {type}</p>
                ))}
            </div>
            <div>
                <p>Height: {pokemon.height} cm</p>
                <p>Weight: {pokemon.weight} tons</p>
            </div>
        </div>
    ) 

}