import React from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';
import './styles/BadgeList.css'

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo( () => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });
        setFilteredBadges(result)
    }, [ badges, query]);

    return {query, setQuery, filteredBadges};
}

function BadgeList(props) {
    const badges = props.badges;

    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if (filteredBadges === undefined || filteredBadges.length === 0 ) {
        return (
            <div className="BadgeListError__container">
                <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-search"></i>
                </span>
                <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
                </div>
                <h3 className="mt-3">We can't find any badge</h3>
                <Link to="badges/new">
                    <button type="button" className="btn btn-primary">Create first badge</button>
                </Link>
            </div>
        )
    }
    return (
        <div>
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-search"></i>
                </span>
                <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="BadgesList_container">
                {filteredBadges.reverse().map((badge) => {
                return(
                    <li key={badge.id} className="BadgeList__element">
                        <div className="BadgeList__element-img-container">
                            <Gravatar
                                email={badge.email}
                                className="BadgeList__element-img"
                            />
                        </div>
                        <div className="BadgeList__element-info">
                            <p className="BadgeList__element-name">
                                {badge.firstName} {badge.lastName}
                                <Link to={`/badges/${badge.id}/details`} className="text-reset text-decoration-none">
                                    <i className="far fa-edit"></i>
                                </Link>
                            </p>
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
        </div>
    )
}

export default BadgeList;