import React from "react";
import { PokeCard } from "./PokeCard";
import { Pokedex } from "./pokedex";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 100vh;
    overflow: scroll;
`
const CardContainer = styled.div`
    height: 51vh;
    margin: 0.5%;
    padding: 1%;
    overflow: scroll;
    &::-webkit-scrollbar {width: 0};
    &:hover {cursor: all-scroll};
`

export const TopSpA = () => {
    const topSpA = [];
    for (let pokemon in Pokedex) {
        if (Pokedex[pokemon].baseStats.spa > 160) {
            if (Pokedex[pokemon].name === 'Mewtwo-Mega-X') {Pokedex[pokemon].name = 'Mewtwo-MegaX'}
            if (Pokedex[pokemon].name === 'Mewtwo-Mega-Y') {Pokedex[pokemon].name = 'Mewtwo-MegaY'}
            topSpA.push(Pokedex[pokemon]);
        }
    }
    
    return (
        <Container>
         {topSpA.map((pokemon, i)=> <CardContainer key={'Container'+i}><PokeCard key={i} name={pokemon.name} sprite={`https://play.pokemonshowdown.com/sprites/ani/${pokemon.name.toLowerCase()}.gif`} hp={pokemon.baseStats.hp} attack={pokemon.baseStats.atk} defense={pokemon.baseStats.def} spatk={pokemon.baseStats.spa} spdef={pokemon.baseStats.spd} speed={pokemon.baseStats.spe} total={true}/></CardContainer>)}
        </Container>
    )
}