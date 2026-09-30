import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the portfolio starter', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('nav a');

    expect(links.length).toBe(5);
  });

  it('should render the social links', () => {
    const socialLinks = fixture.nativeElement.querySelectorAll('.social-links a');

    expect(socialLinks.length).toBe(2);
});

  it('should link to GitHub', () => {
  const githubLink = fixture.nativeElement.querySelector(
    '.social-links a[aria-label="GitHub"]'
  );

  expect(githubLink).toBeTruthy();
  expect(githubLink.getAttribute('href')).toBe(
    'https://github.com/marcellinomodesto-kamehameha'
  );
});


  it('should link to email', () => {
  const emailLink = fixture.nativeElement.querySelector(
    '.social-links a[aria-label="Email"]'
  );

  expect(emailLink).toBeTruthy();
  expect(emailLink.getAttribute('href')).toBe(
    'https://mail.google.com/mail/?view=cm&fs=1&to=marcellinomodesto@gmail.com'
  );
});


});
