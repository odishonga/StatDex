import React from 'react';
import { Comparison } from './Comparison';
import { TopPokemon } from './TopPokemon';
import { TopHP } from './TopHP';
import { TopAttack } from './TopAtk';
import { TopDef } from './TopDef';
import { TopSpA } from './TopSpA';
import { TopSpDef } from './TopSpDef';
import { TopSpeed } from './TopSpeed';
import { Watch } from './Watch';
import pokeball from '../pokeball.svg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MainScreen = ({display}) => {
    switch (display) {
        case 'Comparison': {
            return (<Container><Comparison/></Container>)
        }
        case 'Top Pokemon': {
            return (<Container><TopPokemon/></Container>)
        }
        case 'HP': {
            return (<Container><TopHP/></Container>)
        }
        case 'attack': {
            return (<Container><TopAttack/></Container>)
        }
        case 'defence': {
            return (<Container><TopDef/></Container>)
        }
        case 'spatk': {
            return (<Container><TopSpA/></Container>)
        }
        case 'spdef': {
            return (<Container><TopSpDef/></Container>)
        }
        case 'speed': {
            return (<Container><TopSpeed/></Container>)
        }
        case 'Watch': {
            return (<Container><Watch/></Container>)
        }
        default: {
            return (<ImgContainer><img className='App-logo' alt='A shaking pokeball' src={pokeball} /></ImgContainer>);
        }
    }
}