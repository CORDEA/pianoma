import {RandomNotes} from "./RandomNotes";

export const NOTES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
]

const MAX_LEVEL = 7

export class NotesGenerator {
    generate(numberOfNotes: number): RandomNotes {
        return {
            treble: this.generateNotes(numberOfNotes),
            bass: this.generateNotes(numberOfNotes)
        }
    }

    private generateNotes(numberOfNotes: number): string[] {
        return Array.from(Array(numberOfNotes).keys()).map(i => {
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
                const note = NOTES[Math.floor(Math.random() * NOTES.length)]
                return note + mark + Math.floor(Math.random() * MAX_LEVEL)
            }
        )
    }
}
