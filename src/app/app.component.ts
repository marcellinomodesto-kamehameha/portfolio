import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly title = 'Student Portfolio';
  readonly studentName = 'Marcellino';
  readonly currentYear = new Date().getFullYear();

}
