import { Component } from '@angular/core';
import { Header } from "./components/partials/header/header";
import { HomeComponent } from "./components/pages/home/home";

@Component({
  selector: 'app-root',
  imports: [Header, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
