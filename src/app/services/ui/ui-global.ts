import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiGlobal {
  activaSpiner = signal<boolean>(false);
}
