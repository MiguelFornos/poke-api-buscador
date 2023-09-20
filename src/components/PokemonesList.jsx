import {useEffect, useState} from 'react' 
import Pokemones from './Pokemones'

function PokemonesList() {

    const [nombre, setNombre] = useState('')
    const [pokemones, setPokemones] = useState([])

    useEffect(() => {
        if (nombre.trim() !== '') {
            const nombreMinuscula = nombre.toLowerCase()
            async function fetchData() {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreMinuscula}`);
              const data = await response.json();
              setPokemones([data]);
            }
            fetchData();
          } else {
            setPokemones([]);
          }
    }, [nombre])

  return (
    <div className="container ">
        <div className="row ">

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Pokémon</span>
              <input 
               type="text"
               className="form-control hover:border-primary"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"
               value={nombre}
               onChange={(e) => setNombre(e.target.value)}
               placeholder='Nombre del pokémon' 
              />
            </div>

            {
                pokemones.map(pokemon =>{
                    return(
                        <div key={pokemon.id}>
                            <Pokemones pokemon={pokemon} />
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default PokemonesList