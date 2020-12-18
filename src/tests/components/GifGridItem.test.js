import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem/>', () => {
    const title =  'Un tiutlo'
    const url = 'https://localhost/algo.png'
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )
    
    test('Debe mostrar el componente correctamente ', () => {


        expect( wrapper ).toMatchSnapshot();


    })

    test('Debe tener un parrafo en el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );

        
    })

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        //console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
        
    })

    test('Debe tener animate__bounceIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className')

        expect( className.includes('animate__bounceIn')).toBe(true)
        
    })
    
    
        


})
