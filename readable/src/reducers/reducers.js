import {combineReducers} from "redux";
import * as actionsObject from "../actions/actions";
import {cloneDeep, findIndex} from "lodash";

const initialPostState = [
	{
		id: 'sample',
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


const initialCommentState = {
	parentId: [
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
	]

};

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

		case actionsObject.DELETE_POST: {
			const indexOfDeletedPost = findIndex(state, (post) => post.id === action.postObject.id);
			const newState = cloneDeep(state);
			newState[indexOfDeletedPost].deleted = true;
			return newState
		}

		// TODO: Should we have a case here to add a new post?

		default:
			return state;
	}
};

const commentReducer = function(state = initialCommentState, action) {
	switch (action.type) {

		case actionsObject.GET_ALL_COMMENTS: {
			const {comments, postID} = action;
			return {
				...state,
				[postID]: comments
			};
		}

		case actionsObject.GET_SINGLE_COMMENT: {
			return [action.comment]
		}

		case actionsObject.UP_VOTE_COMMENT: {
			const postID = action.postID;
			const commentID = action.commentID;
			const newState = JSON.parse(JSON.stringify(state));
			newState[postID].forEach((comment) => {
				if (comment.id === commentID) {
					comment.voteScore++;
				}
			});

			return newState;
		}

		case actionsObject.DOWN_VOTE_COMMENT: {
			const postID = action.postID;
			const commentID = action.commentID;
			const newState = JSON.parse(JSON.stringify(state));
			newState[postID].forEach((comment) => {
				if (comment.id === commentID) {
					comment.voteScore--;
				}
			});

			return newState;

		}

		case actionsObject.ADD_NEW_COMMENT: {
			const newState = JSON.parse(JSON.stringify(state));
			const newComment = action.commentObject;
			const parentId = newComment.parentId;

			newComment.deleted = false;
			newComment.parentDeleted = false;
			newState[parentId].push(newComment);

			return newState;
		}

		case actionsObject.DELETE_COMMENT: {
			
			const newState = JSON.parse(JSON.stringify(state));
			const indexOfDeletedComment = newState[action.postID].forEach((comment, index) => {
				if (comment.id === action.commentID) {
					comment.deleted = true;
				}
			});
			return newState
		}

		default:
			return state;
	}
};

export default combineReducers({
	posts: postReducer,
	comments: commentReducer
})