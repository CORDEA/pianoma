import {combineReducers} from "redux";
import appReducer from "../AppReducer";

export const rootReducer = combineReducers({
    app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>
