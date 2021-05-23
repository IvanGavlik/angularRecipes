#  Component interaction

Options
* Pass data from parent to child with input binding
* Intercept input property changes with a setter [more info](https://angular.io/guide/component-interaction#intercept-input-property-changes-with-a-setter)
* Intercept input property changes with ngOnChanges() (not recommended)
* Parent listens for child event
* Parent interacts with the child using local variable
  ```angular2html 
  <app-countdown-timer #timer></app-countdown-timer> 
  #timer.start()
  ```
* Parent calls an @ViewChild() [be careful](https://angular.io/guide/component-interaction#parent-calls-an-viewchild)
* Parent and children communicate using a service 
  Components outside this component subtree have no access to the service or their communications
* ngtemplateoutlet [here](https://lukeliutingchun.medium.com/angular-using-ngtemplateoutlet-to-communicate-between-parent-and-dynamic-child-components-4d74ca9ba9b)

Service or @Output() 
* [here](https://lukeliutingchun.medium.com/angular-using-component-level-scoped-service-to-communicate-between-parent-and-children-a2345c3d38ff)
* [service is better](https://www.pluralsight.com/guides/communicating-across-components-using-services)
* mediator (can be anything - component or service)
__When you design a component-based UI, each component should be self-contained, and components shouldn’t rely on the existence of other UI components. 
Such _loosely coupled components_ can be implemented using the Mediator design pattern 
[from](https://livebook.manning.com/book/angular-2-development-with-typescript/chapter-6/53)__
Don’t start implementing the UI components of your application until you’ve identified your mediators


* my idea on quora
Condition you should consider: Is component reusable ?
My advice is don’t start implementing your application until you’ve identified reusable components.
In the process or identification think how component is going to be used ?. Start with ()Output if gets complicated to track communication switch to service.
If component is going to be used by only one parent component use ()Output there is no need for service.
Also, avoid using @Input when you have a deep nested object and also want to detect changes.

