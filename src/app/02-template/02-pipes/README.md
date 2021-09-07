# Pipes

Use pipes to transform strings, currency amounts, dates, and other data for display.

Pipes are simple functions you can use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once

## Commonly used built-in pipes
* DatePipe
* UpperCasePipe
* LowerCasePipe
* CurrencyPipe
* DecimalPipe
* PercentPipe

[doc](https://angular.io/api/common#pipes)
[pipes for internationalization (i18n)](https://angular.io/guide/i18n#i18n-pipes)

## How to use it
```angular2html
<p>The hero's birthday is {{ birthday | date }}</p>
```

## Custom pipes
[here](https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations)

You use data binding with a pipe to display values and respond to user actions.
more info [here](https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations)

## Pure and impure pipe
Pure - change detection on primitive and reference (add in list is not change)
Impure - everything but performance cost, put param pure to false because default is pure
Impure pipes are called whenever change detection runs for a component, which could be every few milliseconds

## Help with observable
Use the built-in AsyncPipe to accept an observable as input and subscribe to the input automatically. 

Without this pipe, your component code would have to subscribe to the observable to consume its values, extract the resolved 
values, expose them for binding, and unsubscribe when the observable is destroyed in order to prevent memory leaks.
AsyncPipe is an impure pipe that saves boilerplate code in your component to maintain the subscription and keep 
delivering values from that observable as they arrive.

```angular2html
p>Message: {{ message$ | async }}</p>
```
```typescript
message$: Observable<string>;
```

## Caching HTTP requests
help with async pipe

## TODO Idea pipe as mapper http observable response with cached data and fetch
