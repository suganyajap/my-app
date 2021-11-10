//import logo from './logo.svg';
//import { useState } from 'react/cjs/react.development';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';
//import { useState } from 'react';
import { MovieList } from './MovieList';
import Button from '@mui/material/Button';
//import { Route, Router } from 'react-router';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';


export default function App() {
 
  
    
  const INITIAL_MOVIES=[
    { 
      name:"Godzilla vs Gong",
      poster:"https://images.hdqwalls.com/wallpapers/godzilla-vs-king-kong-6f.jpg",
      rating:8.3,
      summary:"Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet."

    },
    { 
      name:"The Father",
      poster:"https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      rating:8.7,
      summary:"A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality."

    },
     {
       name:"Captain Marvel",
       poster:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F12%2FCaptain-Marvel-Poster-B-1200x675.jpg",
       rating:6.1,
       summary:"Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls."
    },
    {
      name:"The lion king",
      poster:"http://allears.net/wp-content/uploads/2019/02/the-lion-king-poster-002.jpg",
      rating:6.9,
      summary:"Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his."
  },
  {
    name:"loki",
    poster:"https://lumiere-a.akamaihd.net/v1/images/g_loki_disneyplus_photo02_21360_22b40e20.jpeg",
    rating:8.8,
    summary:"Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority. This sends him on a mission to catch the different antagonist who has been troubling the timelines"
},
{
  name:"The Tomorrow War",
  poster:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/07/the-tomorrow-war-movie-review-1.jpg",
  rating:8.3,
  summary:"Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority. This sends him on a mission to catch the different antagonist who has been troubling the timelines"
},
{
  name:"96",
  poster:"https://www.teahub.io/photos/full/3-30405_96-movie-posters-hd.jpg",
  rating:8.3,
  summary:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
},
{
  name:"Moana",
  poster:"https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg",
  rating:7.3,
  summary:"An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity."
},
  ];
  const [movies,setMovies]=useState(INITIAL_MOVIES);
  
  return (
    
   <Router>
     <div>
       <nav className="nav-bar">
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/add-movies">AddMovie</Link></li>
           <li><Link to="/movies">Movies</Link></li>
           <li><Link to="/color-game">ColorGame</Link></li>
         </ul>
         </nav>
         
       <Switch>
       <Route exact path="/">
           <Welcome />
           </Route>
           <Route path="/add-movies">
           <AddMovie movies={movies} setMovies={setMovies} />
           </Route>
           <Route path="/movies">
           <MovieList movies={movies} />
           </Route>
           <Route path="/color-game">
           <AddColor />
           </Route>
        </Switch>
   </div>
  </Router>
    
  );
}

function Welcome(){
  return(
    <div>
      <h3>Welcome to home!!!</h3>
    </div>
  );
}
function AddMovie({movies,setMovies}){
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");
  
  const addMovie=()=>{
    const newMovie ={
      name,
      poster,
      rating,
      summary,
    };//shorthand
    setMovies([...movies,newMovie]);
  };
  return(

    <div className="add-movie-form">
     <TextField
     value={name}
     onChange={(event)=>setName(event.target.value)}
     label="Name"
     variant="standard" />

<TextField
     value={poster}
     onChange={(event)=>setPoster(event.target.value)}
     label="poster"
     variant="standard" />

<TextField
     value={rating}
     onChange={(event)=>setRating(event.target.value)}
     label="rating"
     variant="standard" />

<TextField
     value={summary}
     onChange={(event)=>setSummary(event.target.value)}
     label="summary"
     variant="standard" />
     <Button onClick={addMovie} variant="outlined">Add Movie</Button>
   </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div className="add-color-form">
      <TextField
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        label="enter a color" 
        variant="standard" />
      <Button variant="outlined" onClick={() => setColors([...colors, color])}>Add color</Button>

      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}



function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}