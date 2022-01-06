import { Component } from "@angular/core"

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroeComponent {
    nombre: string='Iroman';
    edad  : number=45

    get nombreCapitalizado() : string{
        return this.nombre.toLocaleUpperCase()
    }

    public obtenerNombre(): string{
        return `${ this.nombre } - ${ this.nombre}`
    }

    public cambiarNombre(): void{
        this.nombre='Spiderman';
    }
    public cambiarEdad(): void{
        this.edad=35;
    }

}