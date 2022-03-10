import React, {useState} from "react";
import { PokeCard } from "./PokeCard";
import { Pokedex } from "./pokedex";



export const TopPokemon = () => {
    const topPokemon = [];
    for (let pokemon in Pokedex) {
        if (Pokedex[pokemon].baseStats.hp+Pokedex[pokemon].baseStats.atk+Pokedex[pokemon].baseStats.def+Pokedex[pokemon].baseStats.spa+Pokedex[pokemon].baseStats.spd+Pokedex[pokemon].baseStats.spe > 690) {
            topPokemon.push(Pokedex[pokemon]);
        }
    }
    //console.log(topPokemon);
    return (
        <>
         {topPokemon.map((pokemon, i)=> <PokeCard key={i} name={pokemon.name} sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.num}.png`} hp={pokemon.baseStats.hp} attack={pokemon.baseStats.atk} defense={pokemon.baseStats.def} spatk={pokemon.baseStats.spa} spdef={pokemon.baseStats.spd} speed={pokemon.baseStats.spe} total={true}/>)}
        </>
    )
}