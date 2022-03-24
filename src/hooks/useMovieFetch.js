import {useEffect, useState} from "react";

import API from '../API';

import {isPersistedState} from '../helpers';


export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {

        /**
         * It fetches the movie and credits from the API and sets the state with the data.
         */
        const fetchMovie = async () => {
            try {
                setLoading(true)
                setError(false)

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId)

                //get directors
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors: directors
                })


                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }

        //check if we have something from sessionState
        const sessionState = isPersistedState(movieId);

        if (sessionState) {
            //console.log('Grapping from sessionstorage Movie!');

            setState(sessionState);
            setLoading(false);

            return;
        }


        //console.log('Grapping from API!');

        fetchMovie()

    }, [movieId]);


    //writing to the session Storage

    useEffect(() => {

        /* This is writing the state to the sessionStorage. */
        sessionStorage.setItem(movieId, JSON.stringify(state));

    }, [movieId, state])

    return {state, loading, error};
}