import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exluir-pensamento',
  standalone: false,
  
  templateUrl: './exluir-pensamento.component.html',
  styleUrl: './exluir-pensamento.component.css'
})
export class ExluirPensamentoComponent {
  pensamento: Pensamento ={
    id:0,
    modelo:"",
    conteudo:"",
    autoria:""
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute

  ){}

  ngOnInit(): void{
    console.log("ok")
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
