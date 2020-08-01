import {AppState} from "./AppState";
import {AppActionTypes} from "./AppAction";
import {NotesGenerator} from "../NotesGenerator";

const generator = new NotesGenerator(4, 4)

const initialState: AppState = {
    notes: {maxNotes: 0, trebles: [], basses: []},
    answer: [],
    result: [],
    currentProgress: 0,
    inProgress: false
}

function appReducer(state = initialState, action: AppActionTypes): AppState {
    switch (action.type) {
        case "START":
            let question = state.notes
            let progress = state.currentProgress + 1
            if (question.maxNotes === 0 || progress >= question.maxNotes) {
                question = generator.generate()
                progress = 1
            }
            return {
                ...state,
                notes: question,
                answer: [],
                currentProgress: progress,
                inProgress: true
            }
        case "END":
            return {...state, inProgress: false}
        case "ANSWER":
            let answer = state.answer
            const index = answer.indexOf(action.note)
            if (index >= 0) {
                answer.splice(index, 1)
                answer = Array.from(answer)
            } else {
                answer = answer.concat(action.note)
            }
            return {...state, answer: answer}
        default:
            return state
    }
}

export default appReducer
