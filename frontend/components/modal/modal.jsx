import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import NewReviewFormContainer from "../film_show/reviews/new_review_form_container";
import UpdateReviewFormContainer from "../film_show/reviews/update_review_form_container";

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let targetComponent;
    switch (modal.modal_type) {
        case 'login':
            targetComponent = <LoginFormContainer />;
            break;
        case 'signup':
            targetComponent = <SignupFormContainer />
            break;
        case 'review':
            targetComponent = <NewReviewFormContainer />
            break;
        case 'edit-review':
            targetComponent = <UpdateReviewFormContainer />
            break;
        default:
            return null;
    }

    return(
        <div className={`modal-background-${modal.modal_type}`} onClick={closeModal}>
            <div className={`modal-child-${modal.modal_type}`} onClick={e => e.stopPropagation()}>
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