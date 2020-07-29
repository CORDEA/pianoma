export const START = 'START';
export const END = 'END';

interface StartAction {
    type: typeof START
}

interface EndAction {
    type: typeof END
}

export type AppActionTypes = StartAction | EndAction
