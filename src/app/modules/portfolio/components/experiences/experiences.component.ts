import { Component, signal } from '@angular/core';
//import { text } from 'stream/consumers';
import { IExperience } from '../../interface/IExperience.interface';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [KnowledgeComponent,MatTooltip],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary:{
        strong:'G-Link',
        p: 'Analista de Monitoramento (NOC) - Março 2025 até o momento'
      },
      text:'<p>Faço parte da equipe do NOC (Network Operation Center) Monitoramento proativo de redes multi-cliente em ambiente com mais de 30 POPs, utilizando PRTG Network Monitor.</p> <p>Utilizamos de Ferramentas como PRTG, SecureCRT para acessar as OLTs que utilizamos (Nokia, FIberHome, ZTE c300/c330), ixcsoft, winbox.</p> <p>Utilização do IXC Soft e IXC ACS para gerenciamento de clientes, suporte a provisionamentos e consultas operacionais em ambiente ISP. </p>'
    }
  ])
  public arrayKnowledge = signal<IKnowledge[]>([
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
