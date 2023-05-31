import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";
import menuReducer from "./menuReducer";

export const rootReducer = combineReducers( {
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    menu: menuReducer
})

export type RootState = ReturnType<typeof rootReducer>