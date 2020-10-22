import React from 'react'

const GifGridItem = ({id,title,url}) => {
    return (<div className="card animate__animated animate__bounce animate__faster">
            <img alt={title} src={url} />
            <h3>{title}</h3>
            </div>
    )
}

export default GifGridItem
