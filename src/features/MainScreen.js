import React from 'react';
import { Comparison } from './Comparison';
import { TopPokemon } from './TopPokemon';
import pokeball from '../pokeball.svg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainScreen = ({display}) => {
    switch (display) {
        case 'Comparison': {
            return (<Container><Comparison/></Container>)
        }
        case 'Top Pokemon': {
            return (<Container><TopPokemon/></Container>)
        }
        default: {
            return (<img className='App-logo' src={pokeball} />);
        }
    }
}