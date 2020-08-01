import {AppActionTypes, END} from "./AppAction";
import {ThunkAction} from "redux-thunk";
import {AppState} from "./AppState";
import {Dispatch} from "redux";

export function finish(): ThunkAction<void, AppState, null, AppActionTypes> {
    return async (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: END
        })
    }
}
