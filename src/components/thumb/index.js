import React from 'react';

import {Image, ThumbNailTitle,Wrapper} from './Thumb.Styles';

const Thumb = ({image, movieId, clickable, title,vote}) => {
    return(
        <Wrapper>
            <Image src={image} alt="movie-thumb"/>
            <ThumbNailTitle>
                <h2>{title}</h2>
                <span>⭐{vote}</span>
            </ThumbNailTitle>
        </Wrapper>
    )
}
export  default Thumb;