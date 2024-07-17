import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { NotesRoutingModule } from "./notes-routing.module";
import { NoteComponent } from "./components/note/note.component";
import { NotesComponent } from "./pages/notes/notes.component";
import { NoteDetailsComponent } from "./components/note-details/note-details.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NotesComponent, NoteComponent, NoteDetailsComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
  ],
})
export class NotesModule {
  constructor() {
    console.log("NotesModule");
  }
}
