import { Component } from '@angular/core';

interface TypeAnimals {
  name: string;
  type: string;
}

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent {
  animals: TypeAnimals[] = [
    { name: 'Turca', type: 'Dog' },
    { name: 'Tom', type: 'Cat' },
    { name: 'Frida', type: 'Dog' },
    { name: 'Bob', type: 'Dog' },
  ];
}
