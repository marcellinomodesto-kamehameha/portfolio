import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  public pageTitle: string = 'Welcome to my Portfolio!';
}
