import {combineReducers} from "redux";
import * as actionsObject from "../actions";

const initialPostState = [
	{
		id: '',
		timestamp: 0,
		title: '',
		body: '',
		author: '',
		category: '',
		voteScore: 0,
		deleted: false,
		thumbnailURL: ""
	}
];


const initialCommentState = [
	{
		id: '',
		parentId: '',
		timestamp: 0,
		body: '',
		author: '',
		voteScore: 0,
		deleted: false,
		parentDeleted: false
	}
];

const postReducer = function(state = initialPostState, action) {
	switch (action.type) {

		case actionsObject.GET_ALL_POSTS: {
			const newState = [];
			for (let propName in action.posts) {
				if (action.posts.hasOwnProperty(propName)) {
					newState.push(action.posts[propName])
				}
			}
			return newState;
		}

		case actionsObject.GET_CATEGORY_POSTS: {
			const newState = [];
			for (let propName in action.posts) {
				if (action.posts.hasOwnProperty(propName)) {
					newState.push(action.posts[propName])
				}
			}
			return newState;
		}

		case actionsObject.GET_SINGLE_POST: {
			return [action.post]
		}

		case actionsObject.UP_VOTE_POST: {

			return state.map((post, index) => {
				if (post.id === action.postObject.id) {
					return {
						...post,
						voteScore: post.voteScore + 1
					};
				}

				return post;
			});

		}

		case actionsObject.DOWN_VOTE_POST: {

			return state.map((post, index) => {
				if (post.id === action.postObject.id) {
					return {
						...post,
						voteScore: post.voteScore - 1
					};
				}

				return post;
			});

		}

		default:
			return state;
	}
};

const commentReducer = function(state = initialCommentState, action) {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	posts: postReducer,
	comments: commentReducer
})