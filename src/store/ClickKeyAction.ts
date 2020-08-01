import {ANSWER, AppActionTypes} from "./AppAction";
import {AppState} from "./AppState";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";

export function answer(note: string): ThunkAction<void, AppState, null, AppActionTypes> {
    return async (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: ANSWER,
            note: note
        })
    }
}
