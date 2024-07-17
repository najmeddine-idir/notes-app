import { Injectable } from "@angular/core";
import { Note } from "../models/note.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  private _notes: BehaviorSubject<Note[]>;

  public notes: Observable<Note[]>;

  constructor() {
    this._notes = new BehaviorSubject<Note[]>(
      JSON.parse(localStorage.getItem("notes") ?? "[]") as Note[]
    );
    this.notes = this._notes.asObservable();
  }

  public async getNotesByCriteriaAsync(filter: string): Promise<void> {
    const filterdNotes = await Promise.resolve(
      (JSON.parse(localStorage.getItem("notes") ?? "[]") as Note[]).filter(
        (x) => x.title?.includes(filter) || x.content?.includes(filter)
      )
    );

    this._notes.next(filterdNotes);
  }

  public async addNoteAsync(newNote: Note): Promise<void> {
    const notes = this._notes
      .getValue()
      .concat({ ...newNote, id: crypto.randomUUID().toString() });

    await Promise.resolve(localStorage.setItem("notes", JSON.stringify(notes)));

    this._notes.next(notes);
  }

  public async updateNoteAsync(updatedNote: Note): Promise<void> {
    const notes = this._notes.getValue().map((note) => {
      if (note.id === updatedNote.id) {
        return { ...updatedNote };
      }

      return note;
    });

    await Promise.resolve(localStorage.setItem("notes", JSON.stringify(notes)));

    this._notes.next(notes);
  }

  public async deleteNoteAsync(id: string): Promise<void> {
    let notes = this._notes.getValue();

    notes = notes.filter((x) => x.id !== id);

    await Promise.resolve(
      notes.length > 0
        ? localStorage.setItem("notes", JSON.stringify(notes))
        : localStorage.removeItem("notes")
    );

    this._notes.next(notes);
  }
}
