import React from "react";
import { VscTrash } from 'react-icons/vsc';
import { HiPencilAlt } from 'react-icons/hi';

const ReviewListItem = ({ review, user, currentUser }) => {
    const { body, film_id, user_id } = review;

    return (
        <div className="review-list-item-container">

            <div className="review-top-line">
                {/* <div className="profile-pic"></div> */}
                <div className="review-by">Review by</div><b>{user.username}</b>

                <div className="review-star-rating">12345</div>

                <div className="review-like">0</div>

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
    )
}

export default ReviewListItem;