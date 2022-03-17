import React, {useState} from "react";
import { PokeCard } from "./PokeCard";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;

    @media(max-width: 429px) {
        flex-direction: column;
    }
`

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
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);

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
        getData1().then(result => {setPokemon1(result.stats[stat].base_stat); setError1(false); setSprite1(result.sprites.front_default); setName1(result.name); setStatName1(result.stats[stat].stat.name)}, () => setError1(true));
        getData2().then(result => {setPokemon2(result.stats[stat].base_stat); setError2(false); setSprite2(result.sprites.front_default); setName2(result.name); setStatName2(result.stats[stat].stat.name)}, () => setError2(true));
    }

    if (statName1 === 'special-attack') {setStatName1('spatk')};
    if (statName1 === 'special-defense') {setStatName1('spdef')};
    if (statName2 === 'special-attack') {setStatName2('spatk')};
    if (statName2 === 'special-defense') {setStatName2('spdef')};

    const dynamicProps1 = {[statName1]: pokemon1};
    const dynamicProps2 = {[statName2]: pokemon2};
    let show = 'flex';
    let disabledToggle = false;
    if (!pokemon1 && !pokemon2) {show = 'none'}
    if (userInput === '' && userInput2 === '') {disabledToggle = true}

    return (
        <>
            <Container style={{flexDirection: 'row', width: '100%', textAlign: "center"}}>
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
            </Container>
            
            <button onClick={handleSubmit} disabled={disabledToggle}>Go!</button>
            <div style={{display: show}}>{pokemon1 > pokemon2 ? <p style={{fontSize: 35, color: 'yellow'}}>Yes!</p> : <p style={{fontSize: 35, color: 'pink'}}>No!</p> }</div>

            <Container style={{display: show}}>
                <PokeCard
                    {...dynamicProps1}
                    sprite={sprite1}
                    name={name1.toUpperCase()}
                    error={error1}
                />
                {pokemon1 > pokemon2 ? <p style={{fontSize:55}}>{'≥'}</p> : <p style={{fontSize:55}}>{'≤'}</p>}
                <PokeCard
                    {...dynamicProps2}
                    sprite={sprite2}
                    name={name2.toUpperCase()}
                    error={error2}
                />
            </Container>
        </>
        
    )
}