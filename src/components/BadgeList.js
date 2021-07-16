import React from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';
import './styles/BadgeList.css'

class BadgeList extends React.Component {
    render () {
        if (this.props.badges === undefined || this.props.badges.length === 0 ) {
            return (
                <div>
                    <h3>We can't find any badge</h3>
                    <Link to="badges/new">
                        <button type="button" className="btn btn-primary">Create first badge</button>
                    </Link>
                </div>
            )
        }

        return (
            <ul className="BadgesList_container">
                {this.props.badges.reverse().map((badge) => {
                return(
                    <li key={badge.id} className="BadgeList__element">
                        <div className="BadgeList__element-img-container">
                            <Gravatar
                                email={badge.email}
                                className="BadgeList__element-img"
                            />
                        </div>
                        <div className="BadgeList__element-info">
                            <p className="BadgeList__element-name">{badge.firstName} {badge.lastName}</p>
                            <div className="BadgeTwitter__container">
                                <i className="fab fa-twitter BadgeTwitterIcon"></i>
                                <p>@{badge.twitter}</p>
                            </div>
                            <p className="BadgeList__element-jobtitle">{badge.jobTitle}</p>
                        </div>
                    </li>
                )
                })}
            </ul>
        )
    }
}

export default BadgeList;