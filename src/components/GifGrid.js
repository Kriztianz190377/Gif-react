import React from 'react';
import { UsefetchGifs } from './hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'



export const GifGrid = ({ category }) => {
    
    const {data:images, loading} = UsefetchGifs(category);
       
    return (

        <>
            <h3 class="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p class="animate__animated animate__flash"> Loading</p>}
            <div className="card-grid">

                {images.map(img => (
                    <GifGridItem
                       key={img.id}
                        {...img}
                    />

                ))}

            </div>
        </>
    )
}
