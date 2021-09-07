import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() color: string = 'red'

  constructor(private el: ElementRef, private rendered: Renderer2) {}

  ngOnInit(): void {
    this.rendered.setStyle(this.el.nativeElement, 'color', this.color);
  }

}
