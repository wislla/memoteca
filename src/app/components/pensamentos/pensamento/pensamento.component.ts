import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: "I love Angular",
    autoria: "Wislla",
    modelo: "modelo3"
  }
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length > 256){
      return "pensamento-g"
    }
    return "pensamento-p";
  }
}
