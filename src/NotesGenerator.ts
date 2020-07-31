import {Notes, RandomNotes} from "./RandomNotes";

export const NOTES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
]

export class NotesGenerator {
    generate(maxNotes: number, maxConcurrency: number): RandomNotes {
        const concurrency = Math.floor(Math.random() * maxConcurrency) + 1
        const trebles = Array.from(Array(Math.ceil(concurrency / 2)).keys())
            .map(i => this.generateNotes(maxNotes, true))
        const basses = Array.from(Array(Math.floor(concurrency / 2)).keys())
            .map(i => this.generateNotes(maxNotes, false))
        return {
            trebles: trebles,
            basses: basses
        }
    }

    private generateNotes(maxNotes: number, isTreble: boolean): Notes {
        const isHalf = Math.random() >= 0.7
        const suffix = isHalf ? "h" : "q"
        const numberOfNotes = isHalf ? Math.floor(maxNotes / 2) : maxNotes
        const notes = Array.from(Array(numberOfNotes).keys()).map(i => {
                let mark
                switch (Math.floor(Math.random() * 3)) {
                    case 0:
                        mark = ""
                        break
                    case 1:
                        mark = "#"
                        break
                    case 2:
                        mark = "b"
                        break
                }
                const name = NOTES[Math.floor(Math.random() * NOTES.length)]
                const level = Math.floor(Math.random() * 2) + (isTreble ? 4 : 2)
                const note = name + mark + level
                if (i === 0) {
                    return note + "/" + suffix
                }
                return note
            }
        )
        return {
            stem: "up",
            notes: notes
        }
    }
}
