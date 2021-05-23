# Content projection

Content projection is a pattern in which you insert (project) the content (another component or html) in your component. 
For example, you could have a Card component that accepts content another component.

Types
* Single-slot content projection
* Multi-slot content projection
* Conditional content projection

Steps
* Create a component.
* In the template for your component, add an ng-content element where you want the projected content to appear.
* Usage 
  <myComponent> <p> This is like input </p> </myComponent>

The ng-content element is a placeholder that does not create a real DOM element. 

## Conditional content projection

If your component needs to conditionally render content, or render content multiple times, 
you should configure that component to accept an ng-template element 
that contains the content you want to conditionally render

_Using an ng-content element in these cases is not recommended_

for more info see [here](https://angular.io/guide/content-projection#conditional-content-projection) and [here](https://medium.com/@pietmichal/angulars-content-projection-trap-and-why-you-should-consider-using-template-outlet-instead-cc3c4cad87c9)

