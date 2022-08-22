import React from "react";
import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { findLike } from "../../reducers/selectors/like_selectors";

const mSTP = (state, ownProps) => {
    return {
        like: findLike(state.entities.likes, ownProps.likeable_item_id, ownProps.likeable_type, ownProps.user_id)
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
                likeable_item_id: this.props.likeable_item_id,
                likeable_type: this.props.likeable_type,
                user_id: this.props.user_id
            })
        };
    }

    render() {
        if (this.props.likeable_type === 'Film') {
            return (
                <div 
                    id={this.props.like ? 'does-like' : ''} 
                    className='film-like' onClick={this.toggleLike}
                >
                    Like
                </div>
            )
        }
    }
};

export default connect(
    mSTP,
    mDTP
)(LikeButton);