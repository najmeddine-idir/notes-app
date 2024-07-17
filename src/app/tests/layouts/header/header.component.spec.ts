import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "../../../core/layouts/header/header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'Note App'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual("Note App");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
