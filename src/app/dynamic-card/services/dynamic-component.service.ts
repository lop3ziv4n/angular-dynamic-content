import {ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {Type} from '@angular/core/src/type';

@Injectable()
export class DynamicComponentService {

  constructor(private cfr: ComponentFactoryResolver) {
  }

  public createComponent(vcRef: ViewContainerRef, component: Type<any>, modelInput: object): ComponentRef<any>[] {
    const componentFactory = this.cfr.resolveComponentFactory(component);
    const componentRef = vcRef.createComponent(
      componentFactory
    );
    componentRef.instance.model = modelInput;
    const components: ComponentRef<any>[] = [];
    components.push(componentRef);
    return components;
  }
}
