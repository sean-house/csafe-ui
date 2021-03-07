import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Post } from 'react-axios'
import history from '../../history';
import { Button } from 'carbon-components-react';
import axiosInstance from '../../apis/safe_api';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


class SendRegistration extends Component {
    render() {
        if (this.props.registerForm.submitSucceeded) {
            const parms = { 
                "username": this.props.registerForm.values.username,
                "email": this.props.registerForm.values.email,
                "password": this.props.registerForm.values.password1,
                "displayname": this.props.registerForm.values.displayname
             }
            return (
                <div>
                  <Post url="/register" 
                    instance={axiosInstance}
                    data={parms}>
                    {(error, response, isLoading, makeRequest, axios) => {
                      if(error) {
                        console.log(error)
                        return (
                            <div>
                                <h2 className="register-page__subheading error-style">
                                    Error in registration: <br/>
                                    {response.data.message}
                                </h2>
                                <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button>
                            </div>)
                      }
                      else if(isLoading) {
                        return (
                            <h2 className="register-page__subheading">
                                Registration in progress
                            </h2>
                            )
                      }
                      else if(response !== null) {
                        return (
                                <div>
                                    <h2 className="register-page__subheading">
                                        {response.data.message} 
                                            <Button className="summary-card-button" size="small" 
                                                onClick={() => history.push('/')}>Return</Button>
                                    </h2>
                                </div>
                                )
                      }
                      return (<div>Default message before request is made.</div>)
                    }}
                  </Post>
                </div>
            )
        }
        return(
            <h2 className="register-page__subheading">
            Awaiting registration details
            </h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registerForm: state.form.registerForm,
    }
};

export default connect(mapStateToProps, )(SendRegistration);
