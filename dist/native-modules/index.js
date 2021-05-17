import { HTMLSanitizer } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dom-purify-sanitizer';
export function configure(config) {
    config.container.unregister(HTMLSanitizer);
    config.singleton(HTMLSanitizer, DOMPurifySanitizer);
}
export { DOMPurifySanitizer };

//# sourceMappingURL=index.js.map
