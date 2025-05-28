import React from "react";

const MovieDescription = ({ movie, onBack }) => {
  if (!movie) return <div>Film non trouvé</div>;

  return (
    <div style={{ fontFamily: "Roboto serif", padding: "1rem" }}>
      <h1>{movie.title}</h1>
      <p style={{ height: "150px", overflowY: "auto" }}>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={onBack} style={{ marginTop: "1rem" }}>
        Retour à l'accueil
      </button>
    </div>
  );
};

export default MovieDescription;
