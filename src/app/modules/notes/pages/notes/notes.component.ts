import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from "@angular/core";
import { smoothSlideUpOfItems } from "../../../../shared/animations/animations";
import { Note } from "../../../../core/models/note.model";
import { NoteService } from "../../../../core/services/note.service";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { NoteDetailsComponent } from "../../components/note-details/note-details.component";
import { NOTE_DETAIL_MODAL_WIDTH } from "../../shared/constants";

@Component({
  selector: "notes",
  templateUrl: "./notes.component.html",
  styleUrl: "./notes.component.scss",
  animations: [smoothSlideUpOfItems],
})
export class NotesComponent implements OnInit, DoCheck, OnChanges {
  private readonly _noteService: NoteService = inject(NoteService);
  private readonly _dialog: MatDialog = inject(MatDialog);

  public notes?: Observable<Note[]>;
  public notesLength: number = 0;

  ngOnInit(): void {
    this.getAllNotes();
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck");²
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges NotesComponent: ", changes);
  }

  getAllNotes() {
    this.notes = this._noteService.notes;
    this.notes.subscribe((x) => {
      this.notesLength = x.length;
    });
  }

  trackById(index: number, note: Note) {
    return note.id;
  }

  openDialog(note?: Note): void {
    this._dialog.open(NoteDetailsComponent, {
      data: note,
      width: NOTE_DETAIL_MODAL_WIDTH,
      autoFocus: false,
    });
  }

  async onChangerNotesFilter(e: Event) {
    await this._noteService.getNotesByCriteriaAsync(
      (e.target as HTMLInputElement).value
    );
  }
}
