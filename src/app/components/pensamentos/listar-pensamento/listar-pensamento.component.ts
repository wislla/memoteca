import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: "I love Angular",
      autoria: "Wislla",
      modelo: "modelo3"
    },
    {
      conteudo: "I love Angular",
      autoria: "Wislla",
      modelo: "modelo3"
    },
    {
      conteudo: "I love Angular",
      autoria: "Wislla",
      modelo: "modelo3"
    }
  ];
}
