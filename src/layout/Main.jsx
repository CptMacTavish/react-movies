import React, {useState, useEffect} from "react";
import {Movies} from "../components/Movies.jsx";
import {Preloader} from "../components/Preloader/Preloader.jsx"
import {Search} from "../components/Searchbar/Search.jsx"


const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState([]);

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== 'all' ? `&type=${type}`: ""}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=expendables`)
        .then(response => response.json())
        .then(data => {setMovies(data.Search);
                       setLoading(false)})
        .catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }, []);

    return <main className=" content">
        <Search searchMovies={searchMovies}/>
        {
            loading ? <Preloader /> : <Movies movies={movies}/>
        }
        
    </main>
}

export {Main}