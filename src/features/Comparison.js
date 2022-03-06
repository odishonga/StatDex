import React, {useState} from "react";

export const Comparison = () => {
    const [userInput, setUserInput] = useState('');
    const [userInput2, setUserInput2] = useState('');
    const [stat, setStat] = useState(0);
    const [pokemon1, setPokemon1] = useState('');
    const [pokemon2, setPokemon2] = useState('');
    const [sprite1, setSprite1] = useState('');
    const [sprite2, setSprite2] = useState('');
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [statName1, setStatName1] = useState('');
    const [statName2, setStatName2] = useState('');

    const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
    const getData1 = async ()=> {
        const response = await fetch(pokeApi+userInput);
        const data = await response.json();
        return data;
    }
    const getData2 = async ()=> {
        const response = await fetch(pokeApi+userInput2);
        const data = await response.json();
        return data;
    }
    const handleSubmit = () => {
        getData1().then(result => setPokemon1(result.stats[stat].base_stat));
        getData2().then(result => setPokemon2(result.stats[stat].base_stat));
        getData1().then(result => setSprite1(result.sprites.front_default));
        getData2().then(result => setSprite2(result.sprites.front_default));
        getData1().then(result => setName1(result.name));
        getData2().then(result => setName2(result.name));
        getData1().then(result => setStatName1(result.stats[stat].stat.name));
        getData2().then(result => setStatName2(result.stats[stat].stat.name));
    }

    return (
        <>
            <p>
                Is <input type='text' onChange={(e) => setUserInput(e.target.value.toLowerCase())} placeholder='Enter a pokemon!'/>
                <select value={stat} onChange={(e) => setStat(e.target.value)}>
                    <option value={0}>bulkier</option>
                    <option value={1}>physically stronger</option>
                    <option value={2}>physically bulkier</option>
                    <option value={3}>specially stronger</option>
                    <option value={4}>specially bulkier</option>
                    <option value={5}>faster</option>
                </select> than <input type='text' onChange={(e) => setUserInput2(e.target.value.toLowerCase())} placeholder='Enter a pokemon!'/> ? 
            </p>
            <button onClick={handleSubmit}>Go!</button>

            {pokemon1 > pokemon2 ? <p>Yes!</p> : <p>No!</p> }

            <div>
                <h3>{name1}</h3>
                <img src={sprite1}/>
                <p>{statName1}: {pokemon1}</p>
            </div>
             {pokemon1 > pokemon2 ? '>' : '<'}
             <div>
                <h3>{name2}</h3>
                <img src={sprite2}/>
                <p>{statName2}: {pokemon2}</p>   
             </div> 
              
        </>
        
    )
}