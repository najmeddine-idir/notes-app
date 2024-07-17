import { Component, DoCheck, Inject, OnChanges, inject } from "@angular/core";
import { Note } from "../../../../core/models/note.model";
import { NoteService } from "../../../../core/services/note.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "note-details",
  templateUrl: "./note-details.component.html",
  styleUrl: "./note-details.component.scss",
})
export class NoteDetailsComponent implements OnChanges {
  private readonly _noteService: NoteService = inject(NoteService);
  private readonly _dialogRef: MatDialogRef<NoteDetailsComponent> = inject(
    MatDialogRef<NoteDetailsComponent>
  );

  constructor(@Inject(MAT_DIALOG_DATA) public note: Note) {}

  ngOnInit(): void {
    console.log("NoteDetailsComponent_ngOnInit");

    this.note = this.note ?? new Note();
  }

  ngOnChanges(): void {
    console.log("NoteDetailsComponent_ngOnChanges");
  }

  async addOrUpdateNoteAsync(note: Note): Promise<void> {
    if (note.id) {
      await this._noteService.updateNoteAsync(note);
    } else {
      await this._noteService.addNoteAsync(note);
    }

    this._dialogRef.close();
  }
}
