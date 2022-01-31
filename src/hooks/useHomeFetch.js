import {useEffect, useState, useRef} from "react";

//API
import API from "../API";


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


    //initial and search render
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm)
    }, [searchTerm])


    //load more- button r-render new movies when clicked load more
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm)
        setLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page])


    return {state, loading, error, setSearchTerm, searchTerm, setLoadingMore}

}