import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem} from 'primeng/api';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule,AvatarModule, BadgeModule, MenubarModule, InputTextModule, RippleModule,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout  implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
     this.generarNavar();
  }

  generarNavar():void{

     this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-check'
            },
            {
                label: 'Productos',
                icon: 'pi-shopping-car',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U'
                    }
                ]
            }
        ];

  }

}
