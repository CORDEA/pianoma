import {Question} from "../Question";

export const START = 'START';
export const END = 'END';

interface StartAction {
    type: typeof START,
    notes: Question
}

interface EndAction {
    type: typeof END
}

export type AppActionTypes = StartAction | EndAction
