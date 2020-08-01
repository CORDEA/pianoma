import {AppActionTypes, START} from "./AppAction";
import {ThunkAction} from "redux-thunk";
import {AppState} from "./AppState";
import {Dispatch} from "redux";

export function next(): ThunkAction<void, AppState, null, AppActionTypes> {
    return async (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: START
        })
    }
}
