import React from 'react';

import "./styles/Badge.css"
import LogoConf from '../images/LogoConference.svg'
import Avatar from '../images/AvatarAstronaut.svg'

class Badge extends React.Component {
    render () {
        const {
            firstName,
            lastName,
            jobTitle,
            twitter,
         } = this.props;
        return  <div className="Badge">
            <div className="Badge__header">
                <img src={LogoConf} alt="LogoConference"></img>
                <div className="Badge__header-title">
                    <h1 className="fw-light">Dev</h1>
                    <h1 className="fw-bold">Conf</h1>
                </div>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={Avatar} alt="Avatar"></img>
                <h1>{firstName}<br/>{lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h5>{jobTitle}</h5>
                <div>@{twitter}</div>
            </div>
            <div className="Badge__footer">#devconf</div>
        </div>;
    }
}

export default Badge;