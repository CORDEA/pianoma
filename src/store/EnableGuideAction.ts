import {AppActionTypes, ENABLE_GUIDE} from "./AppAction";
import {AppState} from "./AppState";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";

export function enableGuide(enableGuide: boolean): ThunkAction<void, AppState, null, AppActionTypes> {
    return async (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: ENABLE_GUIDE,
            enableGuide: enableGuide
        })
    }
}
