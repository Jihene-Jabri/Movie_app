import React from "react";
import MovieCard from "../CardItem/MovieCard";
import "./MoviesList.css";

function MoviesList({ titleSearch, rateSearch, movie }) {

    return (
        <div className="MovieCards-container">
            {movie
                .filter(
                    (el) =>
                        el.title
                            .toLowerCase()
                            .includes(titleSearch.toLowerCase()) &&
                        el.rate >= rateSearch
                )
                .map((movieItem) => (
                    <MovieCard key={movieItem.id} movieItem={movieItem} />
                ))}
        </div>
    );
}

export default MoviesList;
