import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";

//export function MovieList({ movies,setMovies }) {
  export function MovieList() {
  const [movies,setMovies]=useState([]);
  //app mounted only once->useEffect->fetch-setMovies
  const getMovies=()=> {
    fetch("https://6166c4e813aa1d00170a6715.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs));
  };

  useEffect(getMovies,[]);
  //after delete refresh
  const deleteMovie=(id)=>{
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/movies/${id}`,
          {method:"DELETE",
        }).then(()=>getMovies());
  }

  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster ,id},index) => (
        <Movie 
        name={name}
         poster={poster} 
         rating={rating} 
         summary={summary} 
         id={id}
        deleteButton={<IconButton 
           
          onClick={() =>  deleteMovie(id)}
            
          //   console.log("deleting...",index);
          //   const deleteIdx=index;
          //   const remainingMovies=movies.filter((mv,idx)=>idx!==deleteIdx);
          //   console.log("remaining...",remainingMovies);
          //   setMovies(remainingMovies);
           
          className="movie-show-button"
          color="error"
          aria-label="delete movie"
          >
            <DeleteIcon />
          </IconButton>}

        editButton={<IconButton 
          style={{marginLeft:"auto"}}
          className="movie-show-button" 
          onClick={() => history.push("/movies/edit/" + index)}
          color="primary" 
          aria-label="movie edit" >
            <EditIcon />
          </IconButton>}
        />))}
    </section>
  );
}
