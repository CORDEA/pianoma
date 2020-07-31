import {RandomNotes} from "../RandomNotes";

export const START = 'START';
export const END = 'END';

interface StartAction {
    type: typeof START,
    notes: RandomNotes
}

interface EndAction {
    type: typeof END
}

export type AppActionTypes = StartAction | EndAction
