import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    /*     this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background',
      'green'
    );*/
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*     this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background',
      'white'
    ); */
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  constructor(/* private _elementRef: ElementRef, private _renderer: Renderer2 */) {}
}
