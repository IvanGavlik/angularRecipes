import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponent(placeholderContainerRef: ViewContainerRef, component: Type<any>): ComponentRef<any> {
    placeholderContainerRef.clear();
    const componentRef  = placeholderContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(component));
    return componentRef.instance;
  }

}
