import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, TextInput, Button, Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import history from '../../history';

class RegisterPage extends Component {
    renderInput = ({input, 
      label, 
      name, 
      fieldType, 
      placeholder,
      helperText,
      meta}) => {
      const invalidState = (meta.touched && meta.error) ? true : false;
      return (
          <div className="form_field">
              <TextInput 
                  id={name}
                  required
                  invalid={invalidState}
                  type={fieldType}
                  helperText={helperText}
                  invalidText={meta.error}
                  labelText={label}
                  placeholder={placeholder}
                  {...input}
              />
          </div>
      );
    }

    onSubmit = (formValues) => {
      console.log(formValues);
      //this.props.onSubmit(formValues); 
      history.push('/')
    }

    render() {
      return (
        <div className="bx--grid bx--grid--full-width register-page">
          <div className="bx--row register-page__banner">
            <div className="bx--col-lg-16">
              <Breadcrumb noTrailingSlash aria-label="Page navigation">
                <BreadcrumbItem>
                  <Link to="/">CSAFE Home</Link>
                </BreadcrumbItem>
              </Breadcrumb>
              <h1 className="register-page__heading">
                Register to use CSAFE
              </h1>
            </div>
          </div>
        <div className="bx--row register-page__r2">
          <div className="bx--col bx--no-gutter">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row register-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7">
                    <Form 
                      onSubmit={this.props.handleSubmit(this.onSubmit)}
                      >
                      <Field name="username"
                      component={this.renderInput}
                      label="Enter UserName"
                      placeholder="e.g. Joe Smith"
                      fieldType="text"
                      helperText="Your username is what you use to login to the CSAFE system.  This is not visible to other users"
                      />
                      <br />
                      <Field name="email"
                      component={this.renderInput}
                      label="Enter your email address"
                      placeholder="e.g. joe.smith@anywhere.com"
                      fieldType="text"
                      helperText="A valid email address is required; we will send a validation code to this address."
                      />
                      <br />
                      <Field name="password1"
                      component={this.renderInput}
                      label="Create a Password"
                      placeholder="password"
                      fieldType="password"
                      helperText="Passwords must be 8 characters, and include 1 lower case, 1 upper case and 1 digit "
                      />
                      <br />
                      <Field name="password2"
                      component={this.renderInput}
                      label="Confirm Password"
                      fieldType="password"
                      placeholder="repeat password"
                      helperText="To avoid unintentional typos"
                      />
                      <br />
                      <Field name="displayname"
                      component={this.renderInput}
                      label="Enter a displayname"
                      fieldType="text"
                      placeholder="e.g. big-joe21"
                      helperText="Your displayname is what will be shown in the system and how others will know you"
                      />
                      <br />
                      <Button
                        kind="secondary"
                        element={Link}
                        to="/"
                        >Cancel</Button>
                      <Button
                        kind="primary"
                        type="submit">Register</Button>
                    </Form>
                    </div>
                    <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                      <h2 className="register-page__subheading">
                        Why do I need to register
                      </h2>
                      <p className="register-page__p register-page__c2">
                        Registering creates an account on the CSAFE server.  This will enable you to register a 
                        safe if you are Safeholder; or to connect with, and take control of a Safeholder's safe 
                        if you are a Keyholder.
                      </p>
                      <p className="register-page__p register-page__c2">
                        You must register with a real email address since we will send a validation code
                        to this address to confirm it is real.
                      </p> 
                      <p className="register-page__p register-page__c2">
                        We will never sell or give your email to a third party and will only email you with
                        notifications related to you safes, or safeholder/keyholder relationships.
                      </p> 

                    </div>
                  </div>
                </div>
          </div>
        </div>
    </div>


          );
    }
};

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

function validate(formValues) {
  const errors = {};
  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (formValues.password1 !== formValues.password2) {
    errors.password2 = "The two passwords do not match";
  }
  if (!validateEmail(formValues.email)) {
    errors.email = "Please enter a valid email address"
  }

  return errors;
}

export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterPage);;