import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch Man', 'Samurai Champloo', 'Dragon Ball' ]

    const [categories, setCategories] = useState(['Samurai Champloo'] );

    /*  const handleAdd = () => {

        //setCategories( [...categories, 'HunterxHunter'] );
        setCategories(cats => [...cats, 'HunterxHunter'])
    }  */
    
    return (
        <>
            <h2>Gif Expert App aprendia con Blenio</h2>

            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>

                {
                    categories.map( (category)  =>  
                    < GifGrid 
                    key={category}
                    category={category} />
                    ) 
                }    

            </ol>

        </>
    )
}

