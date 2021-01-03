import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextInput } from 'carbon-components-react';
import UserModal from '../UserModal';

class RegisterUser extends Component {
    state = { open: false,
        modalHeading: "Register...",
        primaryButtonText: "Login",
        secondaryButtonText: "Cancel",
        onRequestSubmit: () => {this.props.handleSubmit()},
        onRequestClose: () => {this.toggle_modal()},
        onSecondarySubmit: () => {this.toggle_modal()},
        selectorPrimaryFocus: ".bx--text-input",
        pwType: "password",
        content: <>
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                <Field name="username"
                component={this.renderInput}
                label="Enter UserName"
                />
                <Field name="password1"
                component={this.renderInput}
                label="Create a Password"
                />
                <Field name="password2"
                component={this.renderInput}
                label="Confirm Password"
                />
                <Field name="displayname"
                component={this.renderInput}
                label="Enter a displayname"
                />
            </form>
        </>

    }

    toggle_modal = () => {
        var newState = !this.state.open;
        this.setState({open: newState})
        return
      };

    renderInput = ({input, label, meta}) => {
        console.log(input);
        console.log(label);
        console.log(meta);
        return (
            <div>
                <TextInput
                    required
                    helperText="Optional helper text"
                    id={label}
                    invalidText="A valid value is required"
                    labelText={label}
                    placeholder={label}
                />
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }


    render() {
        return (
            <UserModal {...this.state}/>
        )
    }
}

export default reduxForm({
    form: 'registerForm'
})(RegisterUser);