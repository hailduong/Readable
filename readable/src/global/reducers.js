import {combineReducers} from "redux";

import postReducers from "../posts/postReducers";
import commentReducers from "../comments/commentReducers";

export default combineReducers({
	posts: postReducers,
	comments: commentReducers
})