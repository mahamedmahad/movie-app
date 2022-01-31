import React from 'react';

import {Image} from './Thumb.Styles';

const Thumb = ({image, movieId, clickable}) => {
    return(
        <div>
            <Image src={image} alt="movie-thumb"/>
        </div>
    )
}
export  default Thumb;