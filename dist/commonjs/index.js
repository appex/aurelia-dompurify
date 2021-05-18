"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMPurifySanitizer = exports.configure = void 0;
var aurelia_templating_resources_1 = require("aurelia-templating-resources");
var dom_purify_sanitizer_1 = require("./dom-purify-sanitizer");
Object.defineProperty(exports, "DOMPurifySanitizer", { enumerable: true, get: function () { return dom_purify_sanitizer_1.DOMPurifySanitizer; } });
function configure(frameworkConfiguration, config) {
    dom_purify_sanitizer_1.DOMPurifySanitizer.defaultConfig = config;
    if (frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML']) {
        frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML'] = frameworkConfiguration.container.get(aurelia_templating_resources_1.SanitizeHTMLValueConverter);
    }
}
exports.configure = configure;
aurelia_templating_resources_1.HTMLSanitizer['get'] = function (container) {
    return new dom_purify_sanitizer_1.DOMPurifySanitizer();
};
aurelia_templating_resources_1.HTMLSanitizer['protocol:aurelia:resolver'] = true;
aurelia_templating_resources_1.SanitizeHTMLValueConverter['get'] = function (container) {
    return new aurelia_templating_resources_1.SanitizeHTMLValueConverter(container.get(aurelia_templating_resources_1.HTMLSanitizer));
};
aurelia_templating_resources_1.SanitizeHTMLValueConverter['protocol:aurelia:resolver'] = true;

//# sourceMappingURL=index.js.map
