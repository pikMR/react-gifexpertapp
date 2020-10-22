import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    const {loading,data:images} = useFetchGifs(category);
    return (
        <div className="card-grid">
            <h1 className="animate__animated animate__bounce animate__delay-2s">{category}</h1>
                {
                    loading ? <div className="load">Loading !!!</div> :  images.map(img=> <GifGridItem key={img.id} {...img} />)
                }
        </div>
    )
}