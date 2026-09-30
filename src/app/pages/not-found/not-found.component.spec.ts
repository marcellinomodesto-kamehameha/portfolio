import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { provideRouter } from '@angular/router';

describe('NotFound', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [provideRouter([])]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should render the back home button', () => {
    const homeButton = fixture.nativeElement.querySelectorAll('.home-button');

    expect(homeButton.length).toBe(1);
   });

  it('back to home button should return home', () => {
    const homeButton = fixture.nativeElement.querySelector('.home-button');;

    expect(homeButton).toBeTruthy();
    expect(homeButton.getAttribute('href')).toBe('/');
  });

});
