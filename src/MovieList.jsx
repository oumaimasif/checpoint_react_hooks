
import React from "react";

const MovieList = ({ movies }) => {
    console.log("movielist : ", movies);

    return (
        <div>  
             <ul className=" grid grid-cols-4  gap-8 ">
            {
                movies.map((movie) => (
                    <li key={movie.id}>
                        <h2 className='py-2 text-xl'>{movie.title}</h2>
                        {/* <p>{film.overview}</p> */}
                        <img className='min-w-full h-80' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </li>
                ))
            }
        </ul></div>
    )
}

export default MovieList;

