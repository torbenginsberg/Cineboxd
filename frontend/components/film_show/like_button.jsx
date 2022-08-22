import React from "react";
import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { findLike } from "../../reducers/selectors/like_selectors";
import { FaHeart } from 'react-icons/fa';

const mSTP = (state, ownProps) => {
    return {
        like: findLike(state.entities.likes, ownProps.likeable_id, ownProps.likeable_type, ownProps.user_id)
    }
};

const mDTP = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId))
    }
};

class LikeButton extends React.Component {
    constructor(props){
        super(props)
        this.toggleLike = this.toggleLike.bind(this)
    }

    toggleLike() {
        if (this.props.like) {
            this.props.deleteLike(this.props.like.id)
        } else {
            this.props.createLike({
                likeable_id: this.props.likeable_id,
                likeable_type: this.props.likeable_type,
                user_id: this.props.user_id
            })
        };
    }

    render() {
        if (this.props.likeable_type === 'Film') {
            let status;
            if (this.props.like) {
                status = 'Liked'
            } else {
                status = 'Like'
            }
            return (
                <i 
                    id={this.props.like ? 'does-like-film' : ''} 
                    className='film-like' 
                    onClick={this.toggleLike}
                >
                    <FaHeart />
                    <p>{status}</p>
                </i>
            )
        }
    }
};

export default connect(
    mSTP,
    mDTP
)(LikeButton);