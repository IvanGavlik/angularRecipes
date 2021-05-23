# Dynamic component loader

Component templates are not always fixed. An application may need to load new components at runtime.

## Steps
* define an anchor point to tell Angular where to insert components (container)
There are lott of ways to do this one of then is 
```angular2html
<template #container></template>
```
you can use directive like [here](https://angular.io/guide/dynamic-component-loader#the-anchor-directive)

* you need to have ```ViewContainerRef``` to placeholder
  _ViewContainerRef_ stores a reference to the template element ( our container ) and also exposes an API to create components

* inject (add)  ```ComponentFactoryResolver``` it takes a component and returns a ```ComponentFactory```
  _ComponentFactory_  knows how to create a component
```typescript
    this.container.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(MyComponentToCreated);
    this.componentRef: ComponentRef = this.container.createComponent(factory)
```

* don't forget to destroy the component
```typescript
gOnDestroy() {
this.componentRef.destroy();
}
```

You can also subscribe to a component Output like this:
```typescript
this.componentRef.instance.output.subscribe(event => console.log(event));
```

[ComponentFactory](https://angular.io/api/core/ComponentFactory) also have inputs and outputs of the component and selector
[ViewContainerRef](https://angular.io/api/core/ViewContainerRef) represents a container where one or more views can be attached

## How it works internally
* [here](https://hackernoon.com/exploring-angular-dom-abstractions-80b3ebcfc02)
* [here](https://indepth.dev/posts/1054/here-is-what-you-need-to-know-about-dynamic-components-in-angular)

## Note on dynamic
Because of the broad use of the word "dynamic", one could think that you could "dynamically" load just any component from the internet at runtime.
This is not the case though.
Because of the way angular works, it has to know about every component at buildtime.
That means that the component has to be defined in the same project or has to be imported into an angular module of the project.

## As Service
Use a service to instantiate the component and place it into the body.
More info [here](https://malcoded.com/posts/angular-dynamic-components/#injecting-other-components-into-the-dialog)

However, there is a problem with Loading the child component
More info [here](https://malcoded.com/posts/angular-dynamic-components/#injecting-other-components-into-the-dialog) 
