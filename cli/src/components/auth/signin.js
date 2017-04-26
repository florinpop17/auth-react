import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
    handleFormSubmit({ email, password }){
        console.log(email, password);

        // Need to do something to log user in
    }

    render() {
        const { handleSubmit, fields: { email, password }} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" type="email"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className="form-control" type="password"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}
export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
