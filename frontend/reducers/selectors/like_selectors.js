export const findLike = (likes, likeable_id, likeable_type, user_id) => {
    for (let id in likes) {
        let like = likes[id];
        if(
            like.likeable_id === likeable_id &&
            like.likeable_type === likeable_type && 
            like.user_id === user_id
        ){
            return like;
        }
    }
    return false;
}