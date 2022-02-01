import React from 'react';
import {useParams} from "react-router-dom";

//config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";

//components
import Grid from '../components/grid';
import Spinner from "../components/spinner";
import MovieInfo from "../components/movieInfo";
import MovieInfoBar from '../components/movieInfoBar';


//hook
import {useMovieFetch} from "../hooks/useMovieFetch";

//image
import NoImage from '../assets/images/no_image.jpg';

import Breadcrumbs from "../components/breadCrumb";
import Actors from "../components/actors";

const Movie = () => {

    const {movieId} = useParams()

    const {state: movie, loading, error} = useMovieFetch(movieId)

    console.log(movie)

    if (loading) return <Spinner/>

    if (error) return <div>Something went wrong......</div>

    return (
        <>
            <Breadcrumbs movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar movie={movie}/>
            {/**Actors***/}
            <Grid header={"Actors"}>
                {movie.actors.map((actor) => (

                    <Actors
                        key={actor.credit_id}
                        name={actor.name}
                        imageUrl={
                            actor.profile_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`

                                : NoImage
                        }
                        character={actor.charactor}
                    />
                ))}

            </Grid>

        </>
    )
}
export default Movie;