import React from 'react';
import { Comparison } from './Comparison';

export const MainScreen = ({display}) => {
    switch (display) {
        case 'Comparison': {
            return (<Comparison/>)
        }
        default: {
            return (<p>DEFAULT</p>);
        }
    }
}