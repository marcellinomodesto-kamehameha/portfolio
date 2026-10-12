import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('About', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render about image', () => {
    const image = fixture.nativeElement.querySelector(
      '.about-image',
    ) as HTMLImageElement;

    expect(image).toBeTruthy();
    expect(image.src).toContain('/images/m3.jpg');
  });

  it('should render exactly three sections with the class "about-section"', () => {
    const sections = fixture.nativeElement.querySelectorAll('.about-section');
    expect(sections.length).toBe(3);
  });

  it('should render the three specific subheadings', () => {
    const headings = fixture.nativeElement.querySelectorAll('h2');

    expect(headings.length).toBe(3);
    expect(headings[0].textContent).toContain('My Story');
    expect(headings[1].textContent).toContain('My Journey');
    expect(headings[2].textContent).toContain('My Passion');
  });
});
