import React, { Component } from 'react';
import {
    Button,
    ClickableTile
  } from 'carbon-components-react';

class SafeSummaryCard extends Component  {
    render_button(kh_displayname) {
        if (kh_displayname == null) {
            return (    
            <Button className="summary-card-button" size="small">Release</Button>
            );
        } else {
            return (    
            <Button className="summary-card-button" size="small" disabled>Release</Button>
            );
        }
    }

    render() {
        const {hardware_id, keyholder_displayname, locked } = this.props.safe
        const status = (locked ? "Locked" : "Unlocked")
        return(
                <ClickableTile
                    id={hardware_id}
                    name="tiles"
                    tabIndex={0}
                    value={hardware_id}
                    >
                    Safe: <strong>{hardware_id}</strong><br />
                    Status: {status}<br />
                    Keyholder: <strong>{keyholder_displayname}</strong>
                    {this.render_button(keyholder_displayname)}
                </ClickableTile>
        );
    };
};

export default SafeSummaryCard;