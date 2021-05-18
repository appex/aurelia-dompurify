import { HTMLSanitizer, SanitizeHTMLValueConverter } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dompurify-sanitizer';
import { DOMPurifyValueConverter } from './dompurify-converter';
export function configure(frameworkConfiguration, config) {
    DOMPurifySanitizer.defaultConfig = config;
    frameworkConfiguration.globalResources(DOMPurifyValueConverter);
    if (frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML']) {
        frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML'] = frameworkConfiguration.container.get(SanitizeHTMLValueConverter);
    }
}
HTMLSanitizer['get'] = function (container) {
    return new DOMPurifySanitizer();
};
HTMLSanitizer['protocol:aurelia:resolver'] = true;
SanitizeHTMLValueConverter['get'] = function (container) {
    return new SanitizeHTMLValueConverter(container.get(HTMLSanitizer));
};
SanitizeHTMLValueConverter['protocol:aurelia:resolver'] = true;
export { DOMPurifySanitizer };

//# sourceMappingURL=index.js.map
