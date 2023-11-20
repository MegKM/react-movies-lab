import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data.js";

function App() {
  const [user, setUser] = useState("jeff")

  function userLoggedIn(user){
    if(user){
      setUser(user)
    }
  }

  return (
    <main>
      
      { user ? 
        <>
        <NavBar />
          <Routes>
            <Route path="/" element={ <MoviesListPage movies={ movies }/> } />
            <Route path="/movies/:movieName" element={ <MovieDetailPage movies={ movies }/> } />
            <Route path="/actors" element={ <ActorsListPage movies={ movies }/> } />
          </Routes>
        </>
        :
        <LoginPage userLoggedIn={userLoggedIn}/>
      }
    </main>
  )
}

export default App
