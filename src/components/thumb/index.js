import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';

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

            {
                clickable ? (
                    <ThumbNailTitle>
                        <h2>{title}</h2>
                        <span>⭐{vote}</span>
                    </ThumbNailTitle>
                ) : null
            }
            {/****
             <ThumbNailTitle>
             <h2>{title}</h2>
             <span>⭐{vote}</span>
             </ThumbNailTitle>

             **/}
        </Wrapper>
    )
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
    title: PropTypes.string,
    vote: PropTypes.number
}


export default Thumb;