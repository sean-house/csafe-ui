import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TileGroup,
    SkeletonPlaceholder
  } from 'carbon-components-react';
import SafeSummaryCard from '../SafeSummaryCard';
import { getSafeList, refreshToken } from '../../actions';
//import { Link } from 'react-router-dom';
//import { fetchStreams } from '../../actions';

class SafeList extends Component  {
    componentDidMount() {
        this.props.getSafeList();
    }

    renderList() {
        return this.props.summary.map((safe) => {
            return (
                <div key={safe.hardware_id} className="summary-card">
                    <SafeSummaryCard  safe={safe}/>
                </div>);
        });
    }


    render() {
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
                    >
                    {this.renderList()}
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