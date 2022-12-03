import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';

  cursoAngular: boolean = true;
  ulrImage: string =
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg';

  getValue() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}
}
