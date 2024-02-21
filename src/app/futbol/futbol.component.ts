import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-futbol',
  standalone: true,
  imports: [
    RouterOutlet, HttpClientModule
  ],
  templateUrl: './futbol.component.html',
  styleUrl: './futbol.component.css'
})
export class FutbolComponent {
  constructor(private http: HttpClient) {
    const putExemple = () => {
      this.http.put<any>("http://localhost:3020/eduardocerrato/estadi", {estadio: 'Lusail'}).subscribe();
      console.log("Estadio añadido")
    }
    const getExample2 = () => {
      this.http.get<any>("http://localhost:3020/eduardocerrato/jugadors").subscribe((doc) => {
        console.log(doc)
      })
    }
    putExemple()
    getExample2()
  }
}
