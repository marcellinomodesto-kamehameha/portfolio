import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';
import { provideRouter } from '@angular/router';

describe('Resume', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the contact information', () => {
  const section = fixture.nativeElement.querySelector('.contact-info');

  expect(section.textContent).toContain('Sparks, Nevada');
  expect(section.querySelector('a[href^="tel:"]')).toBeTruthy();
  expect(section.querySelector('a[aria-label="Email"]')).toBeTruthy();
});

  it('should display the education section', () => {
    const sections = Array.from(
      fixture.nativeElement.querySelectorAll('.resume-section'),
    ) as HTMLElement[];

    const education = sections.find(
      (section) =>
        section.querySelector('h2')?.textContent?.trim() === 'Education',
    );

    expect(education).toBeTruthy();
    expect(education?.textContent).toContain(
      'Truckee Meadows Community College',
    );
    expect(education?.textContent).toContain('Bellevue University');
    expect(education?.textContent).toContain(
      'Associates Degree in Web Development',
    );
    expect(education?.textContent).toContain(
      'Bachelors Degree in Web Development',
    );
  });

  it('should display the skills section', () => {
    const sections = Array.from(
      fixture.nativeElement.querySelectorAll('.resume-section'),
    ) as HTMLElement[];

    const skills = sections.find(
      (section) =>
        section.querySelector('h2')?.textContent?.trim() === 'Skills',
    );

    expect(skills).toBeTruthy();
    expect(skills?.textContent).toContain('HTML');
    expect(skills?.textContent).toContain('CSS');
    expect(skills?.textContent).toContain('JavaScript');
    expect(skills?.textContent).toContain('Angular');
    expect(skills?.textContent).toContain('Git');
  });

  it('certificate button should link to certificate pdf', () => {
    const certificateButton = fixture.nativeElement.querySelector('.view-button a');

    expect(certificateButton).toBeTruthy();
    expect(certificateButton.getAttribute('href')).toBe('Certificate.pdf');
    expect(certificateButton.getAttribute('target')).toBe('_blank');
  });


  it('project button should link to projects page', () => {
    const projectsButton = fixture.nativeElement.querySelector('.projects-button');

    expect(projectsButton).toBeTruthy();
    expect(projectsButton.getAttribute('href')).toBe('/projects');
  });
});
