import {AppActionTypes, AUTO} from "./AppAction";
import {AppState} from "./AppState";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";

export function auto(isAuto: boolean): ThunkAction<void, AppState, null, AppActionTypes> {
    return async (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: AUTO,
            isAuto: isAuto
        })
    }
}
