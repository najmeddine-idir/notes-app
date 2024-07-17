import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const smoothSlideUpOfItems = trigger("smoothSlideUpOfItems", [
  transition("* => *", [
    query(
      ":enter",
      [
        style({ transform: "translateY(15%)", opacity: 0 }),
        stagger(250, [
          animate(250, style({ transform: "translateY(0%)", opacity: 1 })),
        ]),
      ],
      { optional: true }
    ),
    query(
      ":leave",
      [
        style({ transform: "translateY(0%)", opacity: 1 }),
        stagger(250, [
          animate(250, style({ transform: "translateY(15%)", opacity: 0 })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const fadeInOnMouseOver = trigger("fadeInOnMouseOver", [
  state(
    "hide",
    style({ visibility: "hidden", transform: "scale(.85)", opacity: 0 })
  ),
  state(
    "show",
    style({ visibility: "visible", transform: "scale(1)", opacity: 1 })
  ),
  transition("hide <=> show", animate(400)),
]);

export const shadowingOnMouseOver = trigger("shadowingOnMouseOver", [
  state("show", style({ "box-shadow": "0px 0px 15px 0px silver" })),
  transition("hide <=> show", [
    group([animate(400), query("@*", [animateChild()], { optional: true })]),
  ]),
]);

export const highlightElement = trigger("highlightElement", [
  state("highlight", style({ "background-color": "gold" })),
  transition(
    "* => highlight",
    group([animate(500), query("@*", [animateChild()], { optional: true })])
  ),
  transition(
    "highlight => *",
    group([
      animate(1000, style({ "background-color": "whitesmoke" })),
      query("@*", [animateChild()], { optional: true }),
    ])
  ),
]);
