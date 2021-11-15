import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";

export function AddMovie({ movies, setMovies }) {
  const history =useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    }; //shorthand
   // setMovies([...movies, newMovie]);
    

    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/movies/`,
          {
            method:"POST",
            body:JSON.stringify(newMovie),
            headers:{'Content-Type':'application/json'}
        }).then(()=>history.push("/movies"));
  };
  return (

    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="standard" />

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="poster"
        variant="standard" />

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="rating"
        variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="summary"
        variant="standard" />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="trailer"
        variant="standard" />

      <Button onClick={addMovie} variant="outlined">Add Movie</Button>
    </div>
  );
}
