import {AppState} from "./AppState";
import {AppActionTypes} from "./AppAction";
import {NotesGenerator} from "../NotesGenerator";
import {convertNote} from "../NoteConverter";

const generator = new NotesGenerator(4, 4)

const initialState: AppState = {
    notes: {maxNotes: 0, treble: {notes: [], stem: ""}, bass: {notes: [], stem: ""}},
    answer: [],
    result: [],
    numberOfAnswers: 0,
    numberOfCorrectAnswers: 0,
    currentProgress: -1,
    inProgress: false,
}

function appReducer(state = initialState, action: AppActionTypes): AppState {
    switch (action.type) {
        case "START":
            let question = state.notes
            let progress = state.currentProgress + 1
            if (question.maxNotes === 0 || progress >= question.maxNotes) {
                question = generator.generate()
                progress = 0
            }
            return {
                ...state,
                notes: question,
                answer: [],
                result: [],
                currentProgress: progress,
                inProgress: true
            }
        case "END":
            const treble = state.notes.treble.notes
            const bass = state.notes.bass?.notes ?? []
            const isEven = state.currentProgress % 2 === 0
            let trebleIndex = state.currentProgress
            let bassIndex = state.currentProgress
            if (treble.length > bass.length) {
                bassIndex = isEven ? trebleIndex / 2 : -1
            }
            if (treble.length < bass.length) {
                trebleIndex = isEven ? bassIndex / 2 : -1
            }
            let notes = trebleIndex >= 0 ? treble[trebleIndex].concurrentNotes : []
            if (bass.length > 0 && bassIndex >= 0) {
                notes = notes.concat(bass[bassIndex].concurrentNotes)
            }
            const result = notes.map(n => convertNote(n).format())
            let correct = false
            if (state.answer.length === result.length) {
                correct = state.answer.every((value, i) => value === result[i])
            }
            return {
                ...state,
                result: result,
                inProgress: false,
                numberOfAnswers: state.numberOfAnswers + 1,
                numberOfCorrectAnswers: state.numberOfCorrectAnswers + (correct ? 1 : 0)
            }
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
