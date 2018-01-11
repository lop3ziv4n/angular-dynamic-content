import {
  Compiler, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ModuleWithComponentFactories, NgModule, OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-runtime-content',
  templateUrl: './runtime-content.component.html',
  styleUrls: ['./runtime-content.component.css']
})
export class RuntimeContentComponent implements OnInit {

  template = '<div>\nHello, {{name}}\n</div>';
  value: string;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(private cfr: ComponentFactoryResolver, private compiler: Compiler) {
  }

  ngOnInit() {
  }

  compileTemplate() {
    const metadata = {
      selector: `runtime-component-sample`,
      template: this.template
    };
    const value = this.value;
    const componentClass = class RuntimeComponent {
      name: string = value;
    };
    const factory = this.createComponentFactorySync(this.compiler, metadata, componentClass);
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent {
    };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({imports: [CommonModule], declarations: [decoratedCmp]})
    class RuntimeComponentModule {
    }

    const module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}
