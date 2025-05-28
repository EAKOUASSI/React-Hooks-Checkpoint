import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [showDescription, setShowDescription] = useState(false);

  if (!movie) return <div>Loading...</div>;

  return (
    <Card className={`movie-card mb-4 ${showDescription ? "expanded" : ""}`}>
      <Card.Img
        className="poster"
        variant="top"
        src={movie.posterURL}
        alt={`${movie.title} Poster`}
      />
      <Card.Body className="text-center">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          Rating:{" "}
          <span style={{ color: "rgb(0, 221, 255)" }}>{movie.rating}</span>/10
        </Card.Text>

        {showDescription && (
          <Card.Text className="mt-2">{movie.description}</Card.Text>
        )}

        <Button
          variant="primary"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Masquer" : "Voir plus"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
