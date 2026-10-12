import { Component } from '@angular/core';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  readonly projects: PortfolioProject[] = [
    {
      title: 'BioSite',
      description:
        'My first project using HTML and CSS. I created this website to practice the fundamentals of web design while building a site for my stepfather.',
      technologies: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/marcellinomodesto-kamehameha/bioSite.git',
      image: '/images/bioSite-preview.png',
    },
    {
      title: 'RPG Character Builder',
      description:
        'My first project using Angular and TypeScript. This application helped me practice component-based development and build an interactive character-building experience. Features include: selecting different classes, rolling a six-sided die, and the ability to sign-in. ',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/marcellinomodesto-kamehameha/rpg-character-builder',
      image: '/images/rpg-preview.png',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio built with Angular, TypeScript, HTML, and CSS to showcase my skills, education, and development projects.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/marcellinomodesto-kamehameha/portfolio.git',
      image: '/images/portfolio-preview.png',
    },
  ];
}
