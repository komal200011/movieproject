import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Navbar from '../components/navbar';
export default function Detailspage() {
    const movie = useSelector((state) => state.detail.movie);
    console.log("details:", movie)
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <button className='btn btn-success d-flex align-items-left justify-content-center m-5' onClick={() => navigate("/")}>Go back</button>
            <div className="mt-5 container-fluid d-flex align-items-center justify-content-center page-container" style={{ width: "50%" }}>
                <div className="container bg-light" >
                    <div className="row ">
                        <div className="col-md-5 p-3">
                            <img
                                className="card-img-top img-fluid"
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                style={{ height: "420px", width: "100%" }}
                                alt="Movie Poster"
                            />
                        </div>
                        <div className="col-md-7 p-4 " style={{ textAlign: 'left' }}>
                            <h4 className='mt-2'>{movie.title}</h4><br /><br />
                            <h6>{new Date(movie.release_date).getFullYear()} | {movie.original_language}</h6>
                            <br /> <h6><b>Description :</b> {movie.overview}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

