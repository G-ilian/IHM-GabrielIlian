import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-formulario';

  // Campos do formulário
  nome='';
  sobrenome = '';
  //checkbox
  habilidadeSelecionadas: string[] = [];


  cadastrar() {
        alert('Pessoa Fisica ' + this.nome +" "+this.sobrenome+' cadastrada');
      }

      //radio button
  estadoCivilSelecionado ?: EstadoCivil;
  estadoCivilArray: EstadoCivil[];
  constructor() {
    this.estadoCivilArray = [
      {chave:'so', valor:'Solteiro'},
      {chave:'ca', valor:'Casado'},
      {chave:'di', valor:'Divorciado'},
    ];
  }


}

interface EstadoCivil {
    chave: string;
    valor: string;
  }
