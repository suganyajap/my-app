//import logo from './logo.svg';
//import { useState } from 'react/cjs/react.development';
import { useState } from 'react';
import './App.css';
//import { useState } from 'react';
import { MovieList } from './MovieList';
//import { Route } from 'react-router';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Route,Switch,Redirect} from 'react-router-dom';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { AddColor } from './AddColor';
import { EditMovie } from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';


export default function App() {
 
  
    
  // const INITIAL_MOVIES=[
    // { 
      // name:"Godzilla vs Gong",
      // poster:"https://images.hdqwalls.com/wallpapers/godzilla-vs-king-kong-6f.jpg",
      // rating:8.3,
      // summary:"Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet.",
      // trailer:"https://www.youtube.com/embed/odM92ap8_c0"

//     },
//     { 
//       name:"The Father",
//       poster:"https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
//       rating:8.7,
//       summary:"A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
//       trailer:"https://www.youtube.com/embed/60wDuQMJl2Q"

//     },
//      {
//        name:"Captain Marvel",
//        poster:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F12%2FCaptain-Marvel-Poster-B-1200x675.jpg",
//        rating:6.1,
//        summary:"Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
//        trailer:"https://www.youtube.com/embed/0LHxvxdRnYc"
//     },
//     {
//       name:"The lion king",
//       poster:"http://allears.net/wp-content/uploads/2019/02/the-lion-king-poster-002.jpg",
//       rating:6.9,
//       summary:"Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his.",
//       trailer:"https://www.youtube.com/embed/4CbLXeGSDxg"
//   },
//   {
//     name:"loki",
//     poster:"https://lumiere-a.akamaihd.net/v1/images/g_loki_disneyplus_photo02_21360_22b40e20.jpeg",
//     rating:8.8,
//     summary:"Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority. This sends him on a mission to catch the different antagonist who has been troubling the timelines",
//     trailer:"https://www.youtube.com/embed/UlnufxrJlAk"
// },
// {
//   name:"The Tomorrow War",
//   poster:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/07/the-tomorrow-war-movie-review-1.jpg",
//   rating:8.3,
//   summary:"Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority. This sends him on a mission to catch the different antagonist who has been troubling the timelines",
//   trailer:"https://www.youtube.com/embed/QPistcpGB8o"
// },
// {
//   name:"96",
//   poster:"https://www.teahub.io/photos/full/3-30405_96-movie-posters-hd.jpg",
//   rating:8.3,
//   summary:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
//   trailer:"https://www.youtube.com/embed/r0synl-lI4I"
// },
// {
//   name:"Moana",
//   poster:"https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg",
//   rating:7.3,
//   summary:"An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity.",
//   trailer:"https://www.youtube.com/embed/GBPymoyCjjc"
// },
//   ];
  //const [movies,setMovies]=useState([]);
  const history=useHistory();
  const [mode,setMode]=useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

 

  // useEffect(()=> {
  //   async function getMovies(){
  //  const data= fetch("https://6166c4e813aa1d00170a6715.mockapi.io/movies");
  //   const mvs=await data.json() 
  //   setMovies(mvs);
  //   }
  //   getMovies();
  // },[]);

  return (
    
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{bordeRadius:"0px",minHeight:"100vh"}} >
     <div className="App">
       <AppBar position="static" style={{marginBottom:"24px"}}>
     <Toolbar variant="dence">
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/")}
       >Home</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/movies")}
       >Movies</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/add-movies")}
       >AddMovie</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/color-game")}
       >ColorGame</Button>
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/tick-tac-toe")}
       >Tick-TAC-TOE Game</Button>
        <Button 
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        style={{ marginLeft:"auto" }}
       variant="text"
       color="inherit"
       onClick={()=>setMode(mode==="light" ? "dark" : "light")}
       >{ mode==="light" ? "dark" : "light" } Mode</Button>
     </Toolbar>
       </AppBar>
       <Switch>
       
           <Route exact path="/">
           <Welcome />
           </Route>
           <Route path="/films">
           <Redirect to="/movies" />
           </Route>
           <Route path="/movies/edit/:id">
           <EditMovie  />
           </Route>
           <Route path="/movies/:id">
           <MovieDetails />
           </Route>
           <Route path="/movies">
           <MovieList />
           </Route>
           <Route path="/add-movies">
           <AddMovie  />
           </Route>
           <Route path="/color-game">
           <AddColor />
           </Route>
           <Route path="/tick-tac-toe">
           <TicTacToe />
           </Route>
           <Route path="**">
           <NotFound />
           </Route>
           
        </Switch>
   </div>
    </Paper>
   </ThemeProvider>
    
  );
}

function TicTacToe(){
  const { width, height } = useWindowSize();
  const [board, setBoard]=useState(
    [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
    ]);
    const [isXTurn, setIsXTurn]=useState(true);

    
  const decideWinner=(board)=>{
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    //if we have a winning condition on board then we have a winner
    for(let i=0;i<lines.length;i++)
    {
      const [a,b,c]=lines[i];
      if(board[a]!==null && board[a]===board[b] && board[b]===board[c] ){
        console.log("winner is",board[a]);
        return board[a];
      }
    }
    return null;//if no winner
  };

  const winner=decideWinner(board);

  const handleClick=(index)=>{
    console.log(index);
  
   //create the copy of the board and then update the clicked box
   //update only untouched box
   if(winner===null && board[index]===null){
    const boardCopy=[...board];
    boardCopy[index]=isXTurn ? "X" : "O";
    setBoard(boardCopy);
   //togggle xTern
   setIsXTurn(!isXTurn);
  }
};
  return(
    
    <div className="full-game">
    {winner ?  <Confetti
      width={width}
      height={height}
    />:""}
    <div className="board">
      {board.map((val,index)=>(
        <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
      ))}
    </div>
    {winner ? <h2> Winner is: {winner}</h2>: " "}
    </div>
  );
}
function GameBox({onPlayerClick,val}){
 // const [val,setVal]=useState(null);
  const styles = { color:val==="X" ? "green" : "red" }
  return <div 
  style={styles}
  onClick={onPlayerClick}
  className="game-box">{val}</div>;
}

