import React from 'react';
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

function MovieCard({ movieItem }) {
    return (
        <div  >
            <div className="Movie-card" key={movieItem.id}>
                <Card style={{ width: "22rem" }}>
                    <Card.Img variant="top" src={movieItem.posterUrl} alt="Movie Poster" />
                    <Card.Body>
                        <Card.Title>{movieItem.title}</Card.Title>
                        <Card.Text>{movieItem.description}</Card.Text>
                        <StarRatingComponent value = {movieItem.rate}/>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MovieCard
