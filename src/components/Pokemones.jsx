
function Pokemones({pokemon}) {

    const {sprites } = pokemon;
    const img = sprites.other.dream_world.front_default

    const cardStyle = {
        maxWidth: '500px'
    };

  return (
    <div className="container">
        <div className="card mb-3 border-primary" style={cardStyle}>
            <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src={img} className="img-fluid rounded-start py-2 px-3" alt={pokemon.id} />
            </div>
            <div className="col-md-8">
                <div className="card-body bg-dark text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="card-title">{pokemon.name}</h3>
                    <span>N.° {pokemon.id}</span>
                </div>
                <div>
                    <p className="card-text">
                    <h4>Types:</h4>
                    {pokemon.types.map((typeObject) => (
                        <span key={typeObject.type.name} className="badge bg-primary me-2">
                        {typeObject.type.name}
                        </span>
                    ))}
                    </p>
                </div>
                <div className="stats">
                    <h4>Stats:</h4>
                    <ul>
                    {pokemon.stats.map((stat, index) => (
                        <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                        </li>
        ))}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
</div>

  )
}

export default Pokemones