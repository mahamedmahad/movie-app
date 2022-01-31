import React from 'react';
import {useParams} from "react-router-dom";

//config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";

//components
import Grid from '../components/grid';
import Spinner from "../components/spinner";
import MovieInfo from "../components/movieInfo";

//hook
import {useMovieFetch} from "../hooks/useMovieFetch";

//image
import NoImage from '../assets/images/no_image.jpg';

import Breadcrumbs from "../components/breadCrumb";

const Movie = () => {

    const {movieId} = useParams()

    const {state: movie, loading, error} = useMovieFetch(movieId)

    //console.log(movie)

    if(loading) return  <Spinner/>

    if(error) return <div>Something went wrong......</div>

    return (
        <>
            <Breadcrumbs movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>

        </>
    )
}
export default Movie;