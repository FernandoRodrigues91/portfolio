import { Component, inject, signal } from '@angular/core';
//import { title } from 'process';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/agenda Web icon.png',
      alt: "Projeto Agenda Web",
      title: "Agenda Web",
      with:'160px',
      height: '155px',
      description: '<p>Conheça meu primeiro projeto de CRUD com Angular framework e mais...</p> <p>O projeto consiste em uma plataforma de agenda de contatos de simples manuseio apresentando a proposta de CRUD onde o usuário pode criar contatos, alterar e deletar de uma forma simples e prática!</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/FernandoRodrigues91/agendaProject',
        },
      ],
    },
    {
      src: 'assets/img/projects/Lista de Tarefas Icon.png',
      alt: "Projeto Lista de Tarefas",
      title: "Lista de Tarefas",
      with:'160px',
      height: '155px',
      description: '<p>Lista de Tarefas, uma aplicação simples e interativa para gerenciar suas tarefas diárias. O projeto foi desenvolvido com Angular 17, SASS/SCSS, Angular Material</p> <p>O projeto consiste em uma plataforma de lista de tarefas de simples manuseio apresentando a proposta de marcar tarefas que irá fazer onde o usuário pode criar tarefas, alterar e deletar de uma forma simples e prática!</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/FernandoRodrigues91/todoListProject',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
