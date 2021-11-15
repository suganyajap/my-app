//import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { KeyboardBackspaceIcon } from '@mui/icons-material/KeyboardBackspace';
//import Button from '@mui/material/Button';

export function MovieDetails() {
  //const history=useHistory();
  const { id } = useParams();
  //const movie = movies[id];
  console.log("this id is",id);
  const [movie, setMovie]=useState({});
  useEffect(()=>{
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/movies/${id}`,
    {method:"GET",
  })
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  },[]);
  
  const styles = { color: movie.rating < 7 ? "crimson" : "green", fontWeight: "bold", };

  return (
    <div>
      <iframe
        width="100%"
        height="800"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
     </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="rating" style={styles}>⭐{movie.rating}</p>
        </div>
        <p className="summary">{movie.summary}</p>
       {/*<Button onClick={()=> history.goBack()} variant="outlined" startIcon={<KeyboardBackspaceIcon />}>Back</Button>*/}
      </div>
    </div>
  );
}
