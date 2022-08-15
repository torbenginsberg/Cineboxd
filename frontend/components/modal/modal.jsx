import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let targetComponent;
    switch (modal.modal_type) {
        case 'login':
            targetComponent = <LoginFormContainer />;
            break;
        default:
            return null;
    }

    return(
        <div className={modal.modal_type === 'login' ? 'modal-background-login' : 'modal-background'} onClick={closeModal}>
            <div className={modal.modal_type === 'login' ? 'modal-child-login' : 'modal-child'} onClick={e => e.stopPropagation()}>
                {targetComponent}
            </div>
        </div>
    )
};

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);