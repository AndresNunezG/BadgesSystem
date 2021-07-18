import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';

import HeroBg from '../images/HeroImgEdit.svg';
import './styles/BadgeDetails.css'

function BadgeDetails(props) {
    return (
            <div>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__img" src={HeroBg} alt="HeroLogo"></img>
                    <h1 className="BadgeEdit__title">Badge details </h1>
                    <h1 className="BadgeEdit__title-name">
                        &nbsp;{props.badge.firstName}
                        &nbsp;{props.badge.lastName}
                    </h1>
                </div>
                <div className="BadgeEdit__main-container">
                    <div className="BadgeEdit__container">
                        <Badge 
                            firstName={props.badge.firstName}
                            lastName={props.badge.lastName}
                            jobTitle={props.badge.jobTitle}
                            twitter={props.badge.twitter}
                            email={props.badge.email}
                        />
                    </div>
                    <div className="BadgeEdit__actions-container">
                        <Link to={`/badges/${props.badge.id}/edit`}>
                            <button type="button" className="btn btn-primary edit-button">Edit</button>
                        </Link>
                        <button type="button" className="btn btn-danger">Delete</button>
                        {ReactDOM.createPortal(
                            <h1>Hola</h1>,
                            document.getElementById('modal')
                        )}
                    </div>
                </div>
            </div>
    )
}

export default BadgeDetails