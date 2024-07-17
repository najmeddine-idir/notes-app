import { Note } from "./models/note.model";

abstract class Constants {
  public static defaultNotes: Note[] = [
    {
      id: "1",
      title: "Shiba Inu - 1 -",
      content:
        "- 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cumque fugiat quasi reiciendis eum molestiae assumenda consectetur. Ipsam quod dolor nam deleniti voluptatum fugiat soluta ea libero, nemo sed aliquam.",
    },
    {
      id: "2",
      title: "Shiba Inu - 2 -",
      content:
        "- 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cumque fugiat quasi reiciendis eum molestiae assumenda consectetur. Ipsam quod dolor nam deleniti voluptatum fugiat soluta ea libero, nemo sed aliquam.",
    },
    {
      id: "3",
      title: "Shiba Inu - 3 -",
      content:
        "- 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cumque fugiat quasi reiciendis eum molestiae assumenda consectetur. Ipsam quod dolor nam deleniti voluptatum fugiat soluta ea libero, nemo sed aliquam.",
    },
  ];
}

export default Constants;
