import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 10 },
    { name: 'Tom', type: 'Cat', age: 15 },
    { name: 'Frida', type: 'Dog', age: 12 },
    { name: 'Bob', type: 'Dog', age: 4 },
  ];

  animalDetails: string = '';

  constructor(private listService: ListService) {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
