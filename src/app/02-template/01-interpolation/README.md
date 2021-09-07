# Text interpolation

Text interpolation allows you to incorporate dynamic string values into your HTML templates.

## Basic 
```angular2html
  {{ currentCustomer }}
```
```angular2html
src="{{itemImageUrl}}" 
```
```angular2html
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}.</p>
``` 

## Refer to properties of the template's context
```angular2html
<ul>
  <li *ngFor="let customer of customers">{{customer.name}}</li>
</ul>
``` 
```angular2html
<label>Type something:
  <input #customerInput>{ {customerInput.value}}
</label>
``` 

## Advices
Angular executes template expressions after every change detection cycle. Many asynchronous activities trigger change detection cycles, such as promise resolutions, HTTP results, timer events, key presses and mouse moves.

Expressions should finish quickly to keep the user experience as efficient as possible, especially on slower devices. Consider caching values when their computation requires greater resources.
