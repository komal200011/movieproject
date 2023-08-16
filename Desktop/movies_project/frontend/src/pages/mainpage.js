import React, { useEffect, useState } from 'react'
import { getMovies, getSearch } from "../config/Myservice";
import Navbar from '../components/navbar'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Mainpage() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            getMovies().then((res) => {
                if (res.data) {
                    return setMovies(res.data)
                }
            });
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    // const handleSearch = () => {
    //     onSearch(searchTerm);
    // };
    const handleSearch = async () => {
        console.log(searchTerm)
        try {
            getSearch(searchTerm).then((res) => {

                if (res.data) {
                    setMovies(res.data)
                }
            })
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };
    console.log(movies);

    return (

        <div>
            <Navbar />

            <div className="navbar container-fluid d-flex align-items-center justify-content-center">

                <div className="form-inline col-md-4 ">
                    <input
                        type="search"
                        className="search-input rounded  border-0 px-5 p-1 m-2"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <button class="btn m-auto" type="submit" onClick={handleSearch}> <i className='fa fa-search text-light '></i></button>

                </div>
            </div>


            <div className="card-deck container-fluid row d-flex align-items-center justify-content-center">
                {movies.map((movie) => (
                    <div className="card col-md-2 p-2 m-2"
                        onClick={() => {
                            dispatch({
                                type: "moviedetail",
                                payload: {
                                    movie

                                },


                            });
                            navigate("/details");
                        }

                        }>
                        <img className="card-img-top  img-fluid" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ height: "200px", width: "100%" }} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}
                            </h5>
                            <p className="card-text">{movie.overview}</p>
                        </div>
                        <div className='card-footer d-flex justify-content-end text-secondary btn'><i className='fa fa-eye'></i></div>
                    </div>
                ))}
            </div>

        </div >

    )
}
