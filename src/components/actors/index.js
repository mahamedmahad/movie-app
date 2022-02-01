import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Image} from './Actors.styles';


const Actors = ({name, imageUrl, character}) => {
    return (
        <Wrapper>
            <Image src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}

Actors.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}
export  default  Actors;