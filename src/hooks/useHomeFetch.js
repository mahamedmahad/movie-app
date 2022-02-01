import {useEffect, useState, useRef} from "react";

//API
import API from "../API";
import {isPersistedState} from "../helpers";


const initialState = {
    page: 0,
    results: [],
    totalPages: 0,
    totalResults: 0,
}

export const useHomeFetch = () => {


    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //search states
    const [searchTerm, setSearchTerm] = useState('')

    //console.log(searchTerm);

    //button states
    const [isLoadingMore, setLoadingMore] = useState(false)

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page);
            //console.log(movies)

            setState((prev) => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (err) {
            setError(true)
        }
        setLoading(false)
    }


    //check the sessionStorage before the initial Render

    //initial and search render
    useEffect(() => {
        //making sure we don't check the sessionStorage in a search
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState')

            if (sessionState) {
                console.log('Grapping from sessionStorage')
                setState(sessionState)
                return;
            }
        }

        console.log('Grapping from API')

        setState(initialState);
        fetchMovies(1, searchTerm)
    }, [searchTerm])


    //load more- button r-render new movies when clicked load more
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm)
        setLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page])


    //Write to session Storage
    useEffect(() => {

        if (!searchTerm) {
            //get the state inside the sessionStorage and
            // converts into string all
            sessionStorage.setItem('homeState', JSON.stringify(state))
        }

    }, [searchTerm, state])

    return {state, loading, error, setSearchTerm, searchTerm, setLoadingMore}

}