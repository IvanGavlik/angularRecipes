import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentFactoryService} from "../component-factory.service";
import {FormControl} from "@angular/forms";
import {FirstComponent} from "../first/first.component";
import {SecondComponent} from "../second/second.component";

@Component({
  selector: 'app-dynamic-component-ex01',
  templateUrl: './dynamic-component-ex01.component.html',
  styleUrls: ['./dynamic-component-ex01.component.css']
})
export class DynamicComponentEx01Component implements OnInit {

  name = new FormControl('');

  @ViewChild('placeholderContainer', {read: ViewContainerRef}) placeholderContainer: ViewContainerRef = {} as ViewContainerRef;

  constructor(private componentFactoryService: ComponentFactoryService) { }

  ngOnInit(): void {
  }

  onChange() {
    if (this.name.value === '1') {
      this.componentFactoryService.createComponent(this.placeholderContainer, FirstComponent);
    }
    if (this.name.value === '2') {
      this.componentFactoryService.createComponent(this.placeholderContainer, SecondComponent);
    }
  }
}
