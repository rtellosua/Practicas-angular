import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Goku','Thor','Hulk'];
  heroeBorrado:string=""

  BorrarUltimo():void {   
    
    // this.heroeBorrado=this.heroeBorrado+(this.heroes.pop() || '')+',';
    this.heroeBorrado=(this.heroes.pop() || '');

  }
}
