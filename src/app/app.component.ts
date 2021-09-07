import { Component } from '@angular/core';
import {Option} from "./03-directives/01_basic/select-options.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRecipes';

  myOptions: Option[] = [
    { value: 'test', label: 'test L', cssClass: '' },
    { value: 'test 2', label: 'test L2', cssClass: '' }
  ];

}
