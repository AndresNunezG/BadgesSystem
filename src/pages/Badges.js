import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css'
import HeroImg from '../images/HeroImage.svg';
import BadgeList from '../components/BadgeList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})
        try {
            const data = await api.badges.list();
            this.setState({loading: false, error: null, data: data})
        } catch (err) {
            this.setState({loading: false, error: err})
        }
    };

    render () {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__hero-container">
                            <img className="Badges__hero-image" src={HeroImg} alt="ConfLogo"/>
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badge__button">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgeList badges={this.state.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges;