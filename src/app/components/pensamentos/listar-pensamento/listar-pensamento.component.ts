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
      conteudo: "Em algumas agências no 90 circulou um texto chamado sensata substituir Lorem Ipsum para dar um visual mais moderno para o conteúdo. Mas muitas pessoas estavam olhando para ler o texto quando ele estava em Francês ou Inglês, o efeito desejado não foi alcançado. Trabalhar com texto legível, contendo instruções pode causar distrações e isso pode ajudar a focar o layout. A vantagem de origem latina e conteúdo absurdo Lorem ipsum impede o leitor de se distrair com o conteúdo do texto e, portanto, pode se concentrar a sua atenção no design gráfico. Na verdade, o texto Lorem Ipsum tem a vantagem, em contraste com um texto genérico usando comprimento de palavra variável para simular uma ocupação normal do modelo de modo a que ele corresponde ao produto final e para garantir a futura publicação inalterado.",
      autoria: "Wislla1",
      modelo: "modelo3"
    },
    {
      conteudo: "I love Angular",
      autoria: "Wislla2",
      modelo: "modelo3"
    },
    {
      conteudo: "I love Angular",
      autoria: "Wislla,",
      modelo: "modelo3"
    }
  ];
}
