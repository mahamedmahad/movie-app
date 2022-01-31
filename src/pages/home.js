import React, {useEffect, useState} from 'react';


//config
import {
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config';

//Hooks
import {useHomeFetch} from "../hooks/useHomeFetch";

import NoImage from '../assets/images/no_image.jpg';

//components
import HeroImage from "../components/heroImage";

const Home = () => {

    const {state, loading, error} = useHomeFetch()

    console.log(state)

    return (
        <>
            {state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            }
        </>
    )
}
export default Home;