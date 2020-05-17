import { saveLikeToggle } from '../utils/api';

export const TOGGLE_TWEET = 'TOGGLE_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweets ({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked,
    }
}

export function handleToggleTweet (info) {
    return (dispatch) => {
        dispatch(toggleTweets(info))

        return saveLikeToggle(info)
            .catch((e) => {
                console.log('Error in handleToggleTweet: ', e);
                dispatch(toggleTweets(info));
                alert('There was an error liking the tweet. Try again.');
            })
        
    }
}