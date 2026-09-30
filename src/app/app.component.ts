import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly title = 'Student Portfolio';
  readonly studentName = 'Marcellino';
  readonly currentYear = new Date().getFullYear();

  readonly skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];

  readonly projects: PortfolioProject[] = [
    {
      title: 'Project One',
      description: 'Replace this text with a short explanation of the problem your project solves.',
      technologies: ['HTML', 'CSS']
    },
    {
      title: 'Project Two',
      description: 'Describe your contribution, the decisions you made, and what you learned.',
      technologies: ['HTML', 'CSS', 'TypeScript', 'Angular']
    },
    {
      title: 'Project Three',
      description: 'Add another course project or a personal project that represents your work.',
      technologies: ['Add', 'Your', 'Tools']
    }
  ];
}
