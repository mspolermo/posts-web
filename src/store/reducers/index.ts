import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers( {
    user: userReducer,
    comments: commentsReducer
})

export type RootState = ReturnType<typeof rootReducer>