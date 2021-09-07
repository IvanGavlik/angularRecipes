import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() highlightColor = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    this.renderer.setStyle(this.el.nativeElement, { color: this.highlightColor });
  }
}
