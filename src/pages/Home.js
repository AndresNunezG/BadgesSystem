import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css'
import HomeImg from '../images/HomeImg.svg'
import ConfLogo from '../images/LogoConference.svg'

function Home() {
    return (
        <React.Fragment>
            <div className="Home__container">
                <div className="Home__container-info">
                    <img className="Home__logo" src={ConfLogo} alt="HomeLogo"/>
                    <div className="Home__container-title">
                        <h1 className="Home__container-tit1">Dev</h1>
                        <h1 className="Home__container-tit2">Conf</h1>
                    </div>
                    <h2 className="Home__container-info-sub">PRINT YOUR BADGES</h2>
                    <p>The easiest way to manage your conference</p>
                    <Link to="/badges">
                        <button className="btn btn-primary" type="button">Start now</button>
                    </Link>
                </div>
                <img className="Home__img" src={HomeImg} alt="HomeImg" />
            </div>
        </React.Fragment>
    )
}

export default Home;