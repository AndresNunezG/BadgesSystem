import React from 'react';

import HeroImg from '../images/HeroImage.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        twitter: '',
    } };
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    render () {
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__img" src={HeroImg} alt="HeroLogo"></img>
                    <h1 className="BadgeNew__title">Create a new badge</h1>
                </div>
                <div className="Main__container">
                    <div className="BadgeNew__container">
                    <Badge 
                    firstName={this.state.form.firstName}
                    lastName={this.state.form.lastName}
                    twitter={this.state.form.twitter}
                    jobTitle={this.state.form.jobTitle}
                    />
                    </div>
                    <div className="BadgeForm__container">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;