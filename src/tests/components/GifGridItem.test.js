import React from 'react';
import '@testing-library/jest-dom'//para que me muestre la ayuda despues de expect Ej: ".toMatchSnapshot()".
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => { 

    //Tira error en consola: hay que tocar "u" para update del snapshot

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('debe mostrar GifGridItem correctamente', () => { 
        const wrapper = shallow(<GifGridItem url={url} title={title} />);
        expect (wrapper).toMatchSnapshot();
    });

});



