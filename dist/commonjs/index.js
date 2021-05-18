"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMPurifySanitizer = exports.configure = void 0;
var aurelia_templating_resources_1 = require("aurelia-templating-resources");
var dompurify_sanitizer_1 = require("./dompurify-sanitizer");
Object.defineProperty(exports, "DOMPurifySanitizer", { enumerable: true, get: function () { return dompurify_sanitizer_1.DOMPurifySanitizer; } });
var dompurify_converter_1 = require("./dompurify-converter");
function configure(frameworkConfiguration, config) {
    dompurify_sanitizer_1.DOMPurifySanitizer.defaultConfig = config;
    frameworkConfiguration.globalResources(dompurify_converter_1.DOMPurifyValueConverter);
    if (frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML']) {
        frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML'] = frameworkConfiguration.container.get(aurelia_templating_resources_1.SanitizeHTMLValueConverter);
    }
}
exports.configure = configure;
aurelia_templating_resources_1.HTMLSanitizer['get'] = function (container) {
    return new dompurify_sanitizer_1.DOMPurifySanitizer();
};
aurelia_templating_resources_1.HTMLSanitizer['protocol:aurelia:resolver'] = true;
aurelia_templating_resources_1.SanitizeHTMLValueConverter['get'] = function (container) {
    return new aurelia_templating_resources_1.SanitizeHTMLValueConverter(container.get(aurelia_templating_resources_1.HTMLSanitizer));
};
aurelia_templating_resources_1.SanitizeHTMLValueConverter['protocol:aurelia:resolver'] = true;

//# sourceMappingURL=index.js.map
