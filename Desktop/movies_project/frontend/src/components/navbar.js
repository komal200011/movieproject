import React, { useState } from 'react';
import { useNavigate } from 'react-router';
export default function Navbar() {


    const navigate = useNavigate();
    return (<div>
        <div className="text-light bg-dark">
            <div className="col-md-12 row p-2">
                <h4 className="col-md-6 d-flex align-items-center" style={{ fontFamily: 'cursive' }}>MOVIE</h4>
                <h4 className=" col-md-6 d-flex justify-content-end " onClick={() => navigate("/")}><i className='fa fa-home'></i></h4>
            </div>

        </div>
    </div >
    );
};



