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
import Grid from "../components/grid";
import Thumb from "../components/thumb";

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
            <Grid header={"Popular Movies"}>
                {state.results.map((movie) => (
                        <Thumb
                            key={movie.id}
                            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                            movieId = {movie.id}
                        />
                    )
                )}
            </Grid>
        </>
    )
}
export default Home;