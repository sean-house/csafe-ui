import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TileGroup,
    SkeletonPlaceholder,
    InlineNotification
  } from 'carbon-components-react';
import SafeSummaryCard from '../SafeSummaryCard';
import { getSafeList, refreshToken } from '../../actions/getSafeList';

class SafeList extends Component  {
    componentDidMount() {
        this.props.getSafeList();
    }

    renderList() {
        return this.props.summary.map((safe) => {
            return (
                <div key={safe.hardware_id} className="summary-card">
                    <SafeSummaryCard safe={safe}/>
                </div>
                );
        });
    }


    render() {
        console.log(this.props)
        if (!this.props.currentUser.isLoggedIn) {
            return (
                <InlineNotification
                    kind="error"
                    title="You must be logged in to access this page"
                    subtitle="Click on the user avatar icon at the top right"
                />
            );
        }


        if (!this.props.summary) {
            return (
                <SkeletonPlaceholder className="safelist--skeleton__placeholder--small" />
            );
        }

        return(
            <div>
                <h2 className="safeholder-page__subheading">Your Safes</h2>
                <TileGroup
                    legend="Click on a safe for more details"
                    name="tile-group"
                    children={this.renderList()}
                    >
                </TileGroup>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        summary: state.safeList.summary
    }
};

export default connect(mapStateToProps, { getSafeList, refreshToken })(SafeList);