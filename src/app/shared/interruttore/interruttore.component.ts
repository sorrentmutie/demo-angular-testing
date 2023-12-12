import { Component } from '@angular/core';

@Component({
  selector: 'app-interruttore',
  templateUrl: './interruttore.component.html',
  styleUrl: './interruttore.component.css'
})
export class InterruttoreComponent {
   acceso = false;
   cliccami(){
     this.acceso = !this.acceso;
   }

   get messaggio() {
      return this.acceso ? 'acceso' : 'spento';
   }
}
