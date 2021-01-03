import React, { Component } from 'react';
import { ToastNotification } from 'carbon-components-react';
import { connect } from 'react-redux';

class Toast extends Component {
    
    render() {
        var { toast } = this.props
        return (
            <ToastNotification className="toast__style"
                title={toast.title}
                kind={toast.kind}
                subtitle={toast.subtitle}
                hideCloseButton
                caption=""
                timeout={ toast.timeout }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toast: state.toast,
    }
  };

export default connect(mapStateToProps)(Toast);