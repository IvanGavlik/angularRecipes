# Angular elements

Angular elements are Angular components packaged as custom elements (also called Web Components)

to create custom and reusable HTML tags that can be used in web apps just like standard HTML tags 
(Good If you have project with more than one language).

If we think about a single Web Component containing multiple components that encapsulates a single domain 
we start to see a clean path for Micro-Frontends.

The Web Component spec has enabled developers to create reusable components that work natively with the browser.  This is great for creating a component library.

## Angular official
[here](https://angular.io/guide/elements)

## use it for Implementing Dynamic Angular Applications
If your requirements allow you to configure the dashboard using JSON, you could write an interpreter component 
that will assemble the dashboard at runtime using DynamicComponentLoader.
This, however, doesn’t work for more advanced scenarios. I
https://blog.nrwl.io/5-reasons-to-use-angular-elements-390c9a629f89

```typescript
@Component({
template: `<div #dynamic></div>`
})
class DynamicContentCompoent {
    @ViewChild('#dynamic') el: ElementRef;

    constructor(private loader: CmsTemplateLoader) {}

    afterViewInit() {
        this.el.nativeElement.innerHtml = sanitize(this.loader.loadDynamicTemplate());
    }
}
```

## Can use it for Independent Deployment

## Component vs Element on 
Now what we have to do is make Angular understand that we don’t want it to treat this component as a common Angular 
component, but rather as something different. This is done in the module bootstrapping level — what we have t
o do is implement the ngDoBootstrap method on our AppModule and tell our module to define a custom element. 
For that we are going to use the createCustomElement function from the@angular/elements package.
also read more [here](https://indepth.dev/posts/1116/angular-web-components-a-complete-guide)
take note of
```typescript
entryComponents: [UIButtonComponent]
```

## Basic example
[here](https://medium.com/codingthesmartway-com-blog/angular-elements-a-practical-introduction-to-web-components-with-angular-6-52c0b3076c2c)

* way to use it [here](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457) 

## Advanced
[here](https://project-awesome.org/mateusortiz/webcomponents-the-right-way)
