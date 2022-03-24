import React from 'react';


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
import Spinner from "../components/spinner";
import SearchBar from "../components/search";
import Button from "../components/button";

const Home = () => {

    const {state, loading, error, setSearchTerm, searchTerm, setLoadingMore} = useHomeFetch()

    //console.log(state)

    if (error) return <div>Something went wrong.....</div>




    return (
        <>
            {!searchTerm && state.results[0] ? (
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />)
                : null
            }

            {/***search Bar ***/}
            <SearchBar setSearchTerm={setSearchTerm}/>

            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {/* Mapping the results array and returning a thumb component for each movie in the array. */}
                {state.results.map((movie, index) => (
                        <Thumb
                            key={index}
                            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                            movieId={movie.id}
                            title={movie.title}
                            vote={movie.vote_average}
                            clickable={true}
                        />
                    )
                )}
            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text={"Load More"} callback={() => setLoadingMore(true)}/>
            )}
        </>
    )
}
export default Home;