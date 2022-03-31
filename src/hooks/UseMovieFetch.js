import { useEffect, useState, useCallback } from 'react'

import API from "../API"

export const UseMovieFetch = movieId => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovie = useCallback(async () => {
        try {
            setError(false);
            setLoading(true);
            
            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            // Get directors only
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...movie,
                actors: credits.cast,
                directors
            })

        } catch (error) {
            setError(true);
        }

        setLoading(false);

    }, [movieId]);

    useEffect(() => {
        fetchMovie();
    }, [movieId, fetchMovie]);

    return { state, loading, error };
}

