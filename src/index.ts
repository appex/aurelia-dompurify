import { FrameworkConfiguration } from 'aurelia-framework';
// import { HTMLSanitizer } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dom-purify-sanitizer';

export function configure(config: FrameworkConfiguration): void {
  throw new Error(`aurelia-dompurify can't yet be used as a plugin, see the docs for more info`);
  // config.singleton(HTMLSanitizer, DOMPurifySanitizer);
}

export { DOMPurifySanitizer };
