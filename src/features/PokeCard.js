import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 2px solid black;
    width: fit-content;
    height: fit-content;
    overflow: scroll;
    background: pink;
`

export const PokeCard = ({name, sprite, hp, attack, defense, spatk, spdef, speed, total}) => {
    return (
        <Container>
            <h3>{name}</h3>
            <img src={sprite}/>
            {hp ? <p>HP: {hp}</p> : null}
            {attack ? <p>Attack: {attack}</p> : null}
            {defense ? <p>Defence: {defense}</p> : null}
            {spatk ? <p>Special Attack: {spatk}</p> : null}
            {spdef ? <p>Special Defence: {spdef}</p> : null}
            {speed ? <p>Speed: {speed}</p> : null}
            {total ? <p>Total: {hp+attack+defense+spatk+spdef+speed}</p> : null}
        </Container>
    )
}