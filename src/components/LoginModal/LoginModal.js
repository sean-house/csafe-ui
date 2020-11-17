import React from 'react';
import ReactDOM from 'react-dom';
//import { connect } from 'react-redux';
import {
    Modal,
  } from 'carbon-components-react';


const LoginModal = (props) => {
  console.log(props)
      return ReactDOM.createPortal(
            <Modal
              open={props.open}
              hasform="true"
              size="Default"
              modalHeading={props.modalHeading}
              primaryButtonText={props.primaryButtonText}
              secondaryButtonText={props.secondaryButtonText}
              onRequestSubmit={props.onRequestSubmit}
              onRequestClose={props.onRequestClose}
              onSecondarySubmit={props.onSecondarySubmit}
              selectorPrimaryFocus={props.selectorPrimaryFocus}>
              {props.content}
            </Modal>,
          document.body
      );
  };


export default LoginModal;