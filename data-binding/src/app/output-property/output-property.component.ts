import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: false })
  campoValorInput!: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    console.log(this.campoValorInput.nativeElement.value);
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
  }
}
