import {Note} from "./Note"
import {NOTES} from "./Constants"

export function convertNote(note: Note): Note {
    let base = note.base
    let level = note.level
    if (!note.pitch) {
        return new Note(
            base,
            "",
            level
        )
    }
    let pitch = "#"
    const index = NOTES.indexOf(base)
    if (note.pitch === "b") {
        switch (base) {
            case "C":
                base = "B"
                pitch = ""
                level -= 1
                break
            case "F":
                base = "E"
                pitch = ""
                break
            default:
                base = NOTES[index - 1]
        }
        return new Note(
            base,
            pitch,
            level
        )
    }
    switch (base) {
        case "B":
            base = "C"
            pitch = ""
            level += 1
            break
        case "E":
            base = "F"
            pitch = ""
            break
    }
    return new Note(
        base,
        pitch,
        level
    )
}
