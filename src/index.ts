import { FrameworkConfiguration } from "aurelia-framework";
import { HTMLSanitizer } from "aurelia-templating-resources";
import { DOMPurifySanitizer } from "./dom-purify-sanitizer";

export function configure(config: FrameworkConfiguration): void {
  console.log('Configuring DOMPurifySanitizer');
  config.singleton(HTMLSanitizer, DOMPurifySanitizer);
}
