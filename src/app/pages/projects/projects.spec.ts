import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('Projects', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); it('should display the projects heading', () => {
    const heading = fixture.nativeElement.querySelector('h1');

    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('My Projects');
  });

  it('should render a card for each project', () => {
    const cards =
      fixture.nativeElement.querySelectorAll('.project-card');

    expect(cards.length).toBe(component.projects.length);
  });

  it('should render the correct project images and alt text', () => {
    const images = fixture.nativeElement.querySelectorAll(
      '.project-image',
    ) as NodeListOf<HTMLImageElement>;

    expect(images.length).toBe(component.projects.length);

    component.projects.forEach((project, index) => {
      expect(images[index].getAttribute('src')).toBe(project.image);
      expect(images[index].getAttribute('alt')).toBe(
        project.title + ' preview',
      );
    });
  });

  it('should display each project title and description', () => {
    const cards = fixture.nativeElement.querySelectorAll('.project-card');

    component.projects.forEach((project, index) => {
      expect(cards[index].textContent).toContain(project.title);
      expect(cards[index].textContent).toContain(project.description);
    });
  });

  it('should link each project to its GitHub repository', () => {
    const links = fixture.nativeElement.querySelectorAll(
      '.github-link',
    ) as NodeListOf<HTMLAnchorElement>;

    expect(links.length).toBe(component.projects.length);

    component.projects.forEach((project, index) => {
      expect(links[index].getAttribute('href')).toBe(
        project.githubUrl,
      );
      expect(links[index].getAttribute('target')).toBe('_blank');
      expect(links[index].getAttribute('rel')).toBe(
        'noopener noreferrer',
      );
    });
  });
});
