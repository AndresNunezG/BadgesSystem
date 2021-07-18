import React from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';
import api from '../api';

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }
    componentDidMount() {
        this.fetchData();
    }
    handleOpenModal = (e) => {
        this.setState({ modalIsOpen: true})
    }
    handleCloseModal = (e) => {
        this.setState({ modalIsOpen: false})
    }
    handleDeleteBadge = async (e) => {
        this.setState({loading: true, error: null});
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false, error: null});
            this.props.history.push('/badges')
        } catch (err) {
            this.setState({loading: false, error: err});
        }
    }
    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, error: null, data: data});
        } catch (err) {
            this.setState({loading: false, error: err, data: undefined});
        }
    }
    render () {
        if (this.state.loading) {
            return (
                <PageLoading />
            )
        }
        if (this.state.error) {
            return (
                <PageError error={this.state.error} />
            )
        }
        return (
            <BadgeDetails
                badge={this.state.data}
                modalIsOpen={this.state.modalIsOpen}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
            />
        )
    }
}

export default BadgeDetailsContainer;