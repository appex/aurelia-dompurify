"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMPurifySanitizer = exports.configure = void 0;
var aurelia_templating_resources_1 = require("aurelia-templating-resources");
var dom_purify_sanitizer_1 = require("./dom-purify-sanitizer");
Object.defineProperty(exports, "DOMPurifySanitizer", { enumerable: true, get: function () { return dom_purify_sanitizer_1.DOMPurifySanitizer; } });
function configure(config) {
    config.container.unregister(aurelia_templating_resources_1.HTMLSanitizer);
    config.singleton(aurelia_templating_resources_1.HTMLSanitizer, dom_purify_sanitizer_1.DOMPurifySanitizer);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
