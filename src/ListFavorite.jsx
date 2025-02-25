import React from "react";

const ListFavorite = ({ favorites }) => {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold">Mes Favoris</h2>
            <ul className="grid grid-cols-4 gap-8">
                {favorites.map(movie => (
                    <li key={movie.id}>
                        <h2 className='py-2 text-xl'>{movie.title}</h2>
                        <img className='min-w-full h-80' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListFavorite;
