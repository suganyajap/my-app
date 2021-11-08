//import logo from './logo.svg';
//import { useState } from 'react/cjs/react.development';
import './App.css';
//import { useState } from 'react';
import { MovieList } from './MovieList';


export default function App() {
 
  
    
  const movies=[
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
  ];

  return (
    <div className="App">
   
   <MovieList movies={movies}/>
  
    </div>
  );
}

