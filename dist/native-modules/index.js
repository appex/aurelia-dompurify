import { HTMLSanitizer } from "aurelia-templating-resources";
import { DOMPurifySanitizer } from "./dom-purify-sanitizer";
export function configure(config) {
    config.singleton(HTMLSanitizer, DOMPurifySanitizer);
}

//# sourceMappingURL=index.js.map
