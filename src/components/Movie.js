import React from 'react'
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

// Components
import Grid from './grid/Grid';
import Spinner from './spinner/Spinner';
import BreadCrumb from './breadCrumb/BreadCrumb';
import MovieInfo from './movieInfo/MovieInfo';
import MovieBar from './movieBar/MovieBar';
import Actor from './actor/Actor';

// Hook
import { UseMovieFetch } from "./../hooks/UseMovieFetch.js";

// Image
import NoImage from "../images/no_image.jpg";


const Movie = () => {

    const { movieId } = useParams();
    const { state: movie, loading, error } = UseMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Somthing went Wrong ...</div>;

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieBar 
                time={movie.runtime} 
                budget={movie.budget} 
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
}

export default Movie
