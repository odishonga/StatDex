import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2%;
    border: 2px solid black;
    width: fit-content;
    height: fit-content;
    overflow: scroll;
    background: pink;
`

export const PokeCard = ({name, sprite, hp, attack, defense, spatk, spdef, speed, total, error}) => {
    if (error) {
        return <Container style={{color: 'red', fontWeight: 600}}><p>Oops, that Pokemon doesn't exist in the database! Try a different spelling.</p></Container>;
    }
    return (
        <Container>
            <h3>{name}</h3>
            <img alt={`Sprite of ${name}`} src={sprite}/>
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