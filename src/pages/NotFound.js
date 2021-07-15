import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundImg from '../images/PageNotFoundImg.svg';
import './styles/NotFound.css'

function NotFound() {
    return (
        <React.Fragment>
            <div className="Notfound__container">
                <div className="Notfound__container-info">
                    <h1>Error 404 Sorry :(</h1>
                    <p>Page not Found</p>
                    <Link to="/"><button className="btn btn-primary" type="button">Go back home</button></Link>
                </div>
                <div className="Notfound__container-img">
                    <img src={NotFoundImg} alt="NotFoundImg" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;