export interface RandomNotes {
    trebles: Notes[]
    basses: Notes[]
}

export interface Notes {
    notes: Note[]
    stem: string
}

export interface Note {
    note: string[]
    suffix: string | null
}
