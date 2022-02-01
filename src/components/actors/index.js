import React from 'react';

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
export  default  Actors;