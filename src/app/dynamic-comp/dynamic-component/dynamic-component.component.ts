import {
  Component, ComponentFactoryResolver, ComponentRef, Injector, Input, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) vcRef: ViewContainerRef;
  components: ComponentRef<any>[] = [];

  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: { component: any, inputs: any }) {
    if (!data) {
      return;
    }
    // Inputs need to be in the following format to be resolved properly
    const inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {provide: inputName, useValue: data.inputs[inputName]};
    });
    // We create an injector out of the data we want to pass down and this components injector
    const injector = Injector.create(inputProviders, this.vcRef.parentInjector);
    // We create a factory out of the component we want to create
    const componentFactory = this.cfr.resolveComponentFactory(data.component);
    // We create the component using the factory and the injector
    const componentRef = this.vcRef.createComponent(
      componentFactory,
      undefined,
      injector
    );

    this.components.push(componentRef);
  }

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.components.forEach(comp => comp.destroy());
  }

}
