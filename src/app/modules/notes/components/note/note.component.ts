import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from "@angular/core";
import { Note } from "../../../../core/models/note.model";
import {
  fadeInOnMouseOver,
  highlightElement,
  shadowingOnMouseOver,
} from "../../../../shared/animations/animations";
import { NoteService } from "../../../../core/services/note.service";
import { MatDialog } from "@angular/material/dialog";
import { NoteDetailsComponent } from "../note-details/note-details.component";
import { NOTE_DETAIL_MODAL_WIDTH } from "../../shared/constants";

@Component({
  selector: "note",
  templateUrl: "./note.component.html",
  styleUrl: "./note.component.scss",
  animations: [fadeInOnMouseOver, shadowingOnMouseOver, highlightElement],
})
export class NoteComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  private readonly _noteService: NoteService = inject(NoteService);
  private readonly _dialog: MatDialog = inject(MatDialog);
  private readonly _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  public note?: Note;
  @Input()
  public highlightStatus: string = "";
  public displayStatus: string = "hide";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges NoteComponent: ", changes["note"]);
    if (!changes["note"].isFirstChange()) {
      this.highlightNote();
    }
  }

  private highlightNote() {
    this.highlightStatus = "highlight";
    setTimeout(() => {
      this._cdr.markForCheck();
      this.highlightStatus = "";
    }, 1000);
  }

  ngOnInit(): void {
    console.log("init: ", this.note?.title);
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck: ", this.note?.title);
  }

  ngOnDestroy(): void {
    // console.log("destroy: ", this.note?.title);
  }

  public onMouseOver() {
    this.displayStatus = "show";
  }

  public onMouseLeave() {
    this.displayStatus = "hide";
  }

  public onClickNote() {
    this._dialog.open(NoteDetailsComponent, {
      data: this.note,
      width: NOTE_DETAIL_MODAL_WIDTH,
      autoFocus: false,
    });
  }

  public async removeNote() {
    await this._noteService.deleteNoteAsync(this.note!.id!);
  }
}
