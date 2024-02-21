import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RouterOutlet } from '@angular/router';
import {FutbolComponent} from "./futbol/futbol.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, FutbolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenNode';

}
