import { Component } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  public title: string = "Note App";
}
