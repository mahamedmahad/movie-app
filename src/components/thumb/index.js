import React from 'react';
import {Link} from 'react-router-dom';

import {Image, ThumbNailTitle, Wrapper} from './Thumb.Styles';


const Thumb = ({image, movieId, clickable, title, vote}) => {
    return (
        <Wrapper>
            {clickable ? (

                <Link to={`/${movieId}`}>
                    <Image src={image} alt="movie-thumb"/>

                </Link>
            ) : (
                <Image src={image} alt="movie-thumb"/>
            )}
            <ThumbNailTitle>
                <h2>{title}</h2>
                <span>⭐{vote}</span>
            </ThumbNailTitle>
        </Wrapper>
    )
}
export default Thumb;