import React, { Component }from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import {
  TextInput
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import LoginModal from '../LoginModal/LoginModal';
import { loginUser } from '../../actions';



class CsafeHeader extends Component {
  state = { open: false,
          modalHeading: "Login....",
          primaryButtonText: "Login",
          secondaryButtonText: "Cancel",
          onRequestSubmit: () => {this.handleModalSubmit()},
          onRequestClose: () => {this.toggle_login_modal()},
          onSecondarySubmit: () => {this.toggle_login_modal()},
          selectorPrimaryFocus: ".bx--text-input",
          pwType: "password",
          userId: "",
          password: "",
          content: <>
            <TextInput
              required
              onChange={(e) => this.handleUserIDChange(e)} 
              id="text-input-1"
              labelText="UserID"
              placeholder="Enter your userId..."
              style={{ marginBottom: '1rem' }}
            />
            <TextInput.ControlledPasswordInput
              required
              onChange={(e) => this.handlePasswordChange(e)}
              id="text-input-2"
              type={this.pwType}
              togglePasswordVisibility={() => this.togglePasswordVisibility()}
              labelText="Password"
              placeholder="Enter text..."
            />
          </>
            };

  handleUserIDChange = (event) => {
    this.setState({userId: event.target.value});
  };
  
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };
  
  handleModalSubmit = () => {
    this.setState({open: false});
    console.log(this.state.userId + ":" + this.state.password);
    this.props.loginUser(this.state.userId, this.state.password);
  }; 

  togglePasswordVisibility = () => {
    var newType = this.state.pwType === 'password' ? 'text' : 'password'
    this.setState({pwType: newType});
  };

  toggle_login_modal = () => {
    var newState = !this.state.open;
    this.setState({open: newState})
    return
  };

  render_user_status = () => {
      if (this.props.currentUser.isLoggedIn) {
        return "Logged in as: " + this.props.currentUser.userName;
      } else {
        return "You are not logged in"
      }
  };

  render()  {
    return (
      <React.Fragment>
        <Header aria-label="CSAFE Home">
            <SkipToContent />
            <HeaderName element={Link} to="/" prefix="CSAFE">
              Home
            </HeaderName>
            <HeaderNavigation aria-label="Menus">
                <HeaderMenuItem element={Link} to="/safeholders">
                  Safeholders
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/keyholders">
                  Keyholders
                </HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
                <HeaderMenuItem>
                {this.render_user_status()}
                </HeaderMenuItem>
              <HeaderGlobalAction aria-label="User Avatar" 
                onClick={() => {this.toggle_login_modal()}}
                >
                <UserAvatar20 />
              </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <LoginModal {...this.state}/>
      </React.Fragment>
  )}
};

const mapStateToProps = (state) => {
  return {
      currentUser: state.currentUser,
  }
};

export default connect(mapStateToProps, { loginUser })(CsafeHeader);