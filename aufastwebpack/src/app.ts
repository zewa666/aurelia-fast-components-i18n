import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import { FASTDesignSystemProvider, FASTTextArea, FASTButton, focusVisible } from "@microsoft/fast-components";

FASTDesignSystemProvider;
FASTTextArea;
FASTButton;

export class App {
  public message: string = 'Hello World!';
  visible = true;

  foo() {
    this.visible = !this.visible;
  }
}
