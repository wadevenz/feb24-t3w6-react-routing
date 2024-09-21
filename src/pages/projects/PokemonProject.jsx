import { useParams } from "react-router-dom";

export default function PokemonProject(){

    let {pokemonNumber} = useParams();

    return(
        <div>
            <h1>Pokemon Project</h1>
            <p>Here is a list of Pokemon:</p>
            <ul>
                <li>Bulbasaur</li>
                <li>Squirtle</li>
                <li>Charmander</li>
            </ul>
            {pokemonNumber && <h1>Pokemon Number is {pokemonNumber}</h1>}
        </div>
    );
}