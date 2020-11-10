import React, { Component }from 'react';
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
import { Link } from 'react-router-dom';
//import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
//import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

class CsafeHeader extends Component {
    render_user_status = () => {
        if (this.props.currentUser.isLoggedIn) {
          return "Logged in as: " + this.props.currentUser.userName;
        } else {
          return "You are not logged in"
        }
    };


    render()  {
      return (
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
                <HeaderGlobalAction aria-label="User Avatar">
                  <UserAvatar20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
    )}
};

const mapStateToProps = (state) => {
  return {
      currentUser: state.currentUser,
  }
};

export default connect(mapStateToProps, null)(CsafeHeader);