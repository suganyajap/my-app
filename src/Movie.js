import { useState } from 'react';
import { Counter } from './Counter';


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
      <button className="movie-show-button" onClick={() => setShow(!show)}>{show ? "Hide" : "show"} description</button>
      <p style={summaryStyles} className="summary">{summary}</p>
      <Counter />
      {/*<img className="user-pic" src={pic} alt={name} />
            <h1 className="user-name">Hello {name}🌍</h1>*/}
    </div>
  );

}
