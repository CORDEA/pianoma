import { convertNote } from "./NoteConverter";
import { Note } from "./Note";

test("convertNote: 1", () => {
  const note = new Note("C", "", 1);
  const converted = convertNote(note);
  expect(converted.base).toBe("C");
  expect(converted.pitch).toBe("");
  expect(converted.level).toBe(1);
});

test("convertNote: 2", () => {
  const note = new Note("F", "#", 4);
  const converted = convertNote(note);
  expect(converted.base).toBe("F");
  expect(converted.pitch).toBe("#");
  expect(converted.level).toBe(4);
});

test("convertNote: 3", () => {
  const note = new Note("D", "b", 7);
  const converted = convertNote(note);
  expect(converted.base).toBe("C");
  expect(converted.pitch).toBe("#");
  expect(converted.level).toBe(7);
});

test("convertNote: 4", () => {
  const note = new Note("E", "b", 3);
  const converted = convertNote(note);
  expect(converted.base).toBe("D");
  expect(converted.pitch).toBe("#");
  expect(converted.level).toBe(3);
});

test("convertNote: 5", () => {
  const note = new Note("C", "b", 5);
  const converted = convertNote(note);
  expect(converted.base).toBe("B");
  expect(converted.pitch).toBe("");
  expect(converted.level).toBe(4);
});

test("convertNote: 6", () => {
  const note = new Note("F", "b", 2);
  const converted = convertNote(note);
  expect(converted.base).toBe("E");
  expect(converted.pitch).toBe("");
  expect(converted.level).toBe(2);
});

test("convertNote: 7", () => {
  const note = new Note("B", "#", 6);
  const converted = convertNote(note);
  expect(converted.base).toBe("C");
  expect(converted.pitch).toBe("");
  expect(converted.level).toBe(7);
});

test("convertNote: 8", () => {
  const note = new Note("E", "#", 3);
  const converted = convertNote(note);
  expect(converted.base).toBe("F");
  expect(converted.pitch).toBe("");
  expect(converted.level).toBe(3);
});
