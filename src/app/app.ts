import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UiGlobal } from './services/ui/ui-global';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProgressSpinnerModule

  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('punto-de-venta-mi-tienda');

  constructor(public uiGlobal :UiGlobal){}
}
