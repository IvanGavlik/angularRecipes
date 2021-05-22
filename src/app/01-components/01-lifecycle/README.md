# Lifecycle

A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views

The lifecycle continues with change detection

The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM.
(Like directives also)

## Lifecycle event sequence

After your application instantiates a component or directive by calling its constructor, Angular calls the hook methods

### ngOnChanges()

On @Input() of component

Called first if @Input() exist and on every change on input (Happens very frequently).

### ngOnInit()

Called once for component initialization after a template is displayed

### ngOnDestroy()

Cleanup before Angular destroys the component

This is the place to free resources that won't be garbage-collected automatically. You risk memory leaks if you neglect to do so.
* Unsubscribe from Observables and DOM events
* Stop interval timers
* Unregister all callbacks that the directive registered with global or application services

### for more see [here](https://angular.io/guide/lifecycle-hooks)
