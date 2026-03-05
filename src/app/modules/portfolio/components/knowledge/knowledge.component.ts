import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular2+',
      title: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Ícone de conhecimento de Bootstrap',
      title: 'Bootstrap'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
      title: 'HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3',
      title: 'CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript',
      title: 'JavaScript'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de SASS',
      title: 'SASS'
    },
    {
      src: 'assets/icons/knowledge/google.svg',
      alt: 'Ícone de conhecimento em Google Authentication',
      title: 'Google Auth'
    },
      {
      src: 'assets/icons/knowledge/winbox.svg',
      alt: 'Ícone de conhecimento de Winbox',
      title: 'Winbox'
    },
    {
      src: 'assets/icons/knowledge/PRTG.svg',
      alt: 'Ícone de conhecimento de PRTG',
      title: 'PRTG'
    },
    {
      src: 'assets/icons/knowledge/grafana.svg',
      alt: 'Ícone de conhecimento de Grafana',
      title: 'Grafana'
    },

  ])

}
