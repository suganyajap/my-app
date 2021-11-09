import { useState } from 'react';
import { Counter } from './Counter';
import Button from '@mui/material/Button';


export function Movie({ name, poster, rating, summary }) {
  const [show, setShow] = useState(true);
  const styles = { color: rating < 7 ? "crimson" : "green", fontWeight: "bold", };
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie-container">
      <img className="movie-pic" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="rating" style={styles}>⭐{rating}</p>
      </div>
      <Button className="movie-show-button" onClick={() => setShow(!show)} variant="contained">{show ? "Hide" : "show"} description</Button>
      <p style={summaryStyles} className="summary">{summary}</p>
      <Counter />
      
    </div>
  );

}
