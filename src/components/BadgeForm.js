import React from 'react';

class BadgeForm extends React.Component {
    render () {
        return (
            <div>
                <h1>New Attendat</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input 
                         onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         id="firstName"
                         name="firstName"
                         value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input
                         onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         id="lastName"
                         name="lastName"
                         value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job title</label>
                        <input
                         onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         id="jobTitle"
                         name="jobTitle"
                         value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input
                         onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         id="twitter"
                         name="twitter"
                         value={this.props.formValues.twitter}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                         onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         id="email"
                         name="email"
                         value={this.props.formValues.email}
                        />
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;