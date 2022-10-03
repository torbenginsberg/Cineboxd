import React from "react";
import { VscTrash } from 'react-icons/vsc';
import { HiPencilAlt } from 'react-icons/hi';
import UserPhoto from '../../../../app/assets/images/user-avatar-placeholder.png';

const ReviewListItem = ({ review, user, currentUser, openModal, deleteReview }) => {
    const { body, film_id, user_id } = review;
    const username = user ? user.username : "username";

    return (
        <li className="review-list-item-container">

            <img src={UserPhoto} alt="UserPhoto" className="user-avatar"/>

            <div className="review-details">
                <div className="review-top-line-block">
                    <div className="review-top-line">
                        <a className="reviewer-link">
                            Review by&nbsp;
                            <strong className="reviewer-name">{username}</strong>
                        </a>

                        {/* <span className="review-star-rating">12345</span> */}

                        {/* <div className="review-like">0</div> */}
                    </div>
                    {
                        currentUser ? (currentUser.id === review.user_id ?
                            <>
                                <div onClick={() => deleteReview(review.id)} className="delete-review-button"><i className="delete-review-icon"><VscTrash/></i></div>
                                <div onClick={() => openModal({modal_type: 'edit-review'})} className="edit-review-button"><i className="edit-review-icon"><HiPencilAlt/></i></div>
                            </>
                        : null
                        ) 
                    : null 
                    }
                </div>

                <div className="review-body">
                    {body ? <p>{body}</p> : <p>No text with this review</p>}
                </div>
            </div>

        </li>
    )
}

export default ReviewListItem;