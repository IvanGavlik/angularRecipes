import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

export interface Option {
  value: string;
  label: string;
  cssClass: string;
}

@Directive({
  selector: '[appSelectOptions]'
})
export class SelectOptionsDirective implements OnInit {

  @Input() options: Option[] = [];

  constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.options.forEach(el => {

      const option = this.renderer.createElement('option');
      option.value = el.value;
      option.cssClass = el.cssClass;

      this.renderer.appendChild(option,
        this.renderer.createText(el.label));

      this.renderer.appendChild(this.el.nativeElement, option);

    });
  }

}
