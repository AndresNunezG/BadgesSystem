import React from 'react';

import HeroImg from '../images/HeroImage.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import './styles/BadgeNew.css';
import api from '../api';

class BadgeNew extends React.Component {
    state = { 
        loading: false,
        error: null,
        form:
        {
        firstName: '',
        lastName: '',
        jobTitle: '',
        twitter: '',
        email: '',
        } 
    };
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: true, error: null });
            this.props.history.push('/badges');
        } catch(err) {
            this.setState({ loading: false, error: err });
        }
    }
    render () {
        if (this.state.loading) {
            return (
                <PageLoading />
            )
        }
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__img" src={HeroImg} alt="HeroLogo"></img>
                    <h1 className="BadgeNew__title">Create a new badge</h1>
                </div>
                <div className="Main__container">
                    <div className="BadgeNew__container">
                    <Badge 
                    firstName={this.state.form.firstName || "First Name"}
                    lastName={this.state.form.lastName || "Last Name"}
                    twitter={this.state.form.twitter || "Twitter"}
                    jobTitle={this.state.form.jobTitle || "Job Title"}
                    email={this.state.form.email || "example@mail.com"}
                    />
                    </div>
                    <div className="BadgeForm__container">
                        <h1>New Attendat</h1>
                        <BadgeForm
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;